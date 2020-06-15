let fs = require('fs');
/**
 * 检测文件是目录还是文件
 */
fs.stat('helloWorld.js', (error, stats) => {
  if(error) {
    console.log(error);
    return false;
  } else {
    console.log(stats);
    /**
     * Console：
     * Stats {
     *  dev: 886875,
     *  mode: 33206,
     *  nlink: 1,
     *  uid: 0,
     *  gid: 0,
     *  rdev: 0,
     *  blksize: undefined,
     *  ino: 844424931461390,
     *  size: 284,
     *  blocks: undefined,
     *  atimeMs: 1542847157494,
     *  mtimeMs: 1543887546361.2158,
     *  ctimeMs: 1543887546361.2158,
     *  birthtimeMs: 1542847157493.663,
     *  atime: 2018-11-22T00:39:17.494Z,
     *  mtime: 2018-12-04T01:39:06.361Z,
     *  ctime: 2018-12-04T01:39:06.361Z,
     *  birthtime: 2018-11-22T00:39:17.494Z }
     */

    console.log(`文件：${stats.isFile()}`); 
    // Console：文件：true
    
    console.log(`目录：${stats.isDirectory()}`); 
    // Console：目录：false
  }
})
/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
// fs.mkdir('08_WebService/js', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("创建目录成功！");
//     // Console：创建目录成功！
//   }
// })
/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
// fs.rmdir('css', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("删除目录成功！");
//     // Console：删除目录成功！
//   }
// })
/**
 * filename (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
 * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
 * · mode (Number) 文件读写权限，默认 438。
 * · flag (String) 默认值 'w'。
 * callback { Function } 回调，传递一个异常参数 err。
 * 会清除原来文件所有数据，重新写入
 */
fs.writeFile('08_ext.json', '', (err) => {
  if(err) {
    console.log(err);
    return false;
  } else {
    console.log('写入成功！');
  }
})
/**
 * 删除文件
 */
// fs.unlink('helloWorld.js', (err) => {
//   if(err) {
//     console.log(err)
//     return;
//   } else {
//     console.log('删除文件成功')
//   }
// })
/**
 * 追加内容
 */
fs.appendFile('helloWorld.js', '\n//这段文本是要追加的内容', (err) => {
  if(err) {
    console.log(err);
    return false;
  } else {
    console.log("追加成功");
  }
})
/**
 * 读取文件
 */
fs.readFile('helloWorld.js', (err, data) => {
  if (err) {
    console.log(err);
    return false;
  } else {
    console.log(data)
    console.log('读取文件成功')
  }
})
/**
 * 读取目录
 */
fs.readdir('node_modules', (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
    console.log('读取目录成功')
  }
})
/**
 * 重命名文件
 */
// fs.rename('helloWorld.js', 'helloWorld_rename', (err) => {
//   if(err) {
//     console.log(err);
//     return;
//   } else {
//     console.log('重命名成功')
//   }
// })
/**
 * 剪切文件
 */
fs.rename('helloWorld_rename', 'node_modules/helloWorld.js', (err) => {
  if(err) {
    console.log(err);
    return;
  } else {
    console.log('重命名成功')
  }
})