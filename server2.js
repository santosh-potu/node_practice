
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){
    
    var pathname = url.parse(request.url).pathname;
    
    console.log("Request for "+pathname+" Recieved");
    
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
           console.log(err);
           response.writeHead(404, {'Content-Type': 'text/html'});
           response.write("File not found");
        }else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
       
    });
    
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');