let mysql = require('mysql');


let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '268274',
  database: 'test'
})
connection.connect();
let addSql = "INSERT INTO user(id,name,age) VALUES(1,?,?)";
let addSqlParams = ['add2', '19'];
connection.query(addSql, addSqlParams, (err, res) => {
  if (err) {
    console.log(err);
    console.log('添加失败');
    return;
  } else {
    console.log(res, '新增成功');
  }
})
connection.end();

