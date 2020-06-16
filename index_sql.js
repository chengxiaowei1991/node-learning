var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '268274',
  database: 'test'
});

connection.connect();

connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error)  console.log(error.message);
  console.log(results);
});

connection.end();