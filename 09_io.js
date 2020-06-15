let fs = require('fs');/**
* Node 事件循环：
* 1. Node 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
* 2. Node 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
* 3. Node 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件。
*/
let events = require('events');

const eventEmit = new events.EventEmitter()
getData = () => {
  fs.readFile('index.js', (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      eventEmit.emit('data', data);
    }
  })
}
getData();
eventEmit.on('data', (data) => {
  console.log(111111)
})
getOther = () => {
  fs.readFile('helloworld.js', (err, item) => {
    if (err) {
      console.log(err);
      return;
    } else {
      eventEmit.emit('item', item);
    }
  })
}
getOther();
eventEmit.on('item', item => {
  console.log(2222)
})