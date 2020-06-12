let fs = require('fs')
let read = fs.createReadStream('index.js');
let data = ''
read.on('data', (chunk) => {
  data += chunk;
})
read.on('end', () => {
  console.log(data);
})
// let write = fs.createWriteStream('index.js');
// for(let i = 0; i < 1000; i++) {
//   write.write(`console.log("我要写数据，我要写数据");\n`)
// }