const fs= require('fs');
const child_process = require('child_process');

for(var i=0;i<3;i++){
    var work_process = child_process.fork('support.js',[i]);
    
    work_process.on('exit',function (code) {
      console.log('child process exited with code ' + code);
   });
}