const http = require('http');
let fs = require('fs');
let handler = function(req,res) {
  console.log(req.url);
  if(req.url == '/hangMan.html') {
    data = fs.readFileSync('hangMan.html','utf8');
    res.write(data);
  }
  if(req.url == '/hangMan.css') {
    data = fs.readFileSync('hangMan.css','utf8');
    res.write(data);
  }
  if(req.url == '/hangMan.js') {
    data = fs.readFileSync('hangMan.js','utf8');
    res.write(data);
  }
  if(req.url == '/back.jpg'){
    data = fs.readFileSync('back.jpg');
    res.write(data);
  }
  res.end();
}
let server = http.createServer(handler);
server.listen(9999);
