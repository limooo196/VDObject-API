const db = require("../db");

class VDObject {
  constructor(keyId, value, timeId) {
    this.keyId = keyId;
    this.value = value;
    this.timeId = timeId;
  }

  async save() {
    let sql = `insert into vdobject1(keyId,value,timeId) values ("${this.keyId}","${this.value}",${this.timeId})`;
    db.execute(sql);
  }
}

module.exports = VDObject;
