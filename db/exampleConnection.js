const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: 'yourUserName',
  password: "yourPassword",
  database: 'employee_tracker'
});

module.exports = db;