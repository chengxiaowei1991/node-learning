var http = require("http");

var tools1 = require('./03_tool-add');
var tools2 = require('03_tool-multiply');
var tools3 = require('cxw-module');

http.createServer(function (req, res) {

  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');
  
  console.log(tools1.add(1, 2, 3));
  console.log(tools2.multiply(1, 2, 4))
  console.log(tools3)
  /**
   * Console：
   * 6
   * 6
   * 这里要记得 Node 运行过程中，它请求了两次，
   * http://localhost:8888/ 为一次，
   * http://localhost:8888/favicon.ico 为第二次
   */
  
  res.end();

}).listen(8888);
