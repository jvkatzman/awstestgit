var http = require('http');

// simple version
// http.createServer(
//     function(req, res) {
//         res.writeHead(200,{'Content-type':'text/plain'});
//         res.end('Hello World Again\n');
//     }
// //).listen(process.env.PORT, process.env.IP);
// ).listen(1337);

// test with http://127.0.0.1:1337/file.txt
var fs = require('fs');         

http.createServer(
    function(req, res) {
        res.writeHead(200,{'Content-type':'text/plain'});
        if (req.url === '/file.txt'){
            fs.createReadStream(__dirname + '/file.txt').pipe(res);
        }else {
            res.end("hello world");
        }// file.txt
    }
//).listen(process.env.PORT, process.env.IP);
).listen(1337);

console.log('Server running!');