const fs = require('fs');
const child_process = require('child_process');

for(var i=0;i<3;i++){
    var work_process = child_process.spawn('node', ['support.js', i]);
    
    work_process.stdout.on('data',function(data){
        console.log('stdout '+data);
    });
    
    work_process.stderr.on('data',function(data){
        console.log('stderr '+data);
    });
    
    work_process.on('close',function(code){
        console.log('child process exited with code ' + code);
    });
}