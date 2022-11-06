require("dotenv").config();
const mysqlPromise = require("mysql2/promise");
const connection = require("./db");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
const objectRouter = require("./routes/objectRoute");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var PORT = 3000;
app.listen(PORT, console.log(`Listening on ${PORT}`));

app.use("/object", require("./routes/objectRoute"));

app.get("/", (req, res) => {
  res.send(
    'App is working \n Current functionality :\n\t - GET Method : Endpoint:/object (Get everything from database) \n\t - GET Method : Endpoint:/object/:keyId \t(Get latest value based on keyId) \n\t - GET Method : Endpoint:/object/:keyId?timestamp=[timeId]   \t(Get value based on keyId and return the latest before the timeId)\n\t - POST Method : Endpoint:/object, Body:JSON:("keyId" : "value") \t (Insert keyId and its value into the database)  \n\n All timestamps are based on UNIX UTC timezone \n\n '
  );
});

app.use("*", function (req, res) {
  res.send(
    "This page is not available, please go back to the main page \n\n Current working endpoint:\n\t - GET on / \n\t - GET on /object \n\t - GET on /object/:keyId\n\t - GET on /object/:keyId?timestamp=[timeId] \n\t - POST on /object"
  );
});

module.exports = { app };
