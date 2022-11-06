const mysql = require("mysql2");
//const mysqlPromise =require('mysql2/promise');
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  let message = !err ? "Connected" : "Failed to connect";
  console.log(`mysql : ${message}`);
});

module.exports = connection;
