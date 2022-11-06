const VDObject = require("../models/object");
const db = require("../db");

exports.createNewVDObject = async (req, res, next) => {
  try {
    var keyCount = Object.keys(req.body).length;
    var message = "";

    console.log(Object.keys(req.body)[2]);
    for (var i = 0; i < keyCount; i++) {
      var keyId = Object.keys(req.body)[i];
      var value = Object.values(req.body)[i];
      const now = Date.now();

      const utcTimestamp = new Date().getTime();

      let obj1 = new VDObject(keyId, value, utcTimestamp);
      //console.log(keyId)
      var save = await obj1.save();

      message += `"key":${keyId},"value":${value},"timestamp":${utcTimestamp}`;
      message += "\n";

      console.log(`VDObject ${keyId} created`);
    }
    res.status(201).send(message);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    console.log(req.params.keyId);
    var obj = await db.execute(
      "select * from vdobject1",
      (err, results, fields) => {
        return res.send(results);
      }
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getByKeyId = async (req, res, next) => {
  try {
    var timeId = req.query.timestamp;
    let keyId = req.params.keyId;

    if (timeId) {
      var obj = await db.execute(
        `select * from vdobject1 where keyId = "${keyId}" and timeId <= ${timeId} order by timeId desc limit 1;`,
        (err, results, fields) => {
          if (results) {
            return res.send({ value: results[0].value });
          } else {
            res.send(err);
          }
        }
      );
    } else {
      var obj = await db.execute(
        `select * from vdobject1 where keyId = "${keyId}" order by timeId desc limit 1;`,
        (err, results, fields) => {
          console.log("without timestamp");
          return res.send({ value: results[0].value });
          // return res.send(results)
        }
      );
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
