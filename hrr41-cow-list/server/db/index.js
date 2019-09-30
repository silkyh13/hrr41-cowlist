const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'JackAndKat',
  database: 'cows_list'
});

connection.connect();

module.exports = connection;