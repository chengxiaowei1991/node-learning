let fs = require('fs');
fs.stat('upload', (err, stats) => {
  if (err) {
    fs.mkdir('upload', (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('upload目录创建成功')
      }
    })
  } else {
    if(stats.isDirectory) {
      console.log('upload目录已存在')
    }
  }
})
fs.readdir('node_modules', (err, files) => {
  if (err) {
    console.log(err);
    return;
  } else {
    // 判断是目录还是文件夹
    console.log(files);

    let filesArr = [];

    (function getFile(i) {
      
      // 循环结束
      if(i == files.length) {
        // 打印出所有目录
        console.log("目录：");
        console.log(filesArr);
        return false;
      }

      // 判断目录是文件还是文件夹
      fs.stat('node_modules/' + files[i], (error, stats) => {

        if(stats.isDirectory()) {
          filesArr.push(files[i]);
        }

        // 递归调用
        getFile(i+1);
        
      })
    })(0)
  }
})