let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '268274',
  database: 'test',
})

connection.connect();
let deleteSql = "DELETE FROM user where id = 0";
connection.query(deleteSql, (err, res) => {
  if(err) {
    console.log(err, "删除失败")
  } else {
    console.log(res, "删除成功")
  }
});

connection.end();