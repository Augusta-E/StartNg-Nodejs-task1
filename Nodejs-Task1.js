var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    if(req.method === 'POST'){
    let body_m = "";
    req.on('data', function(data){
        body_m += data;
        console.log(body_m)
    });
    req.on('end', ()=>{
        fs.writeFile('message.txt', body_m, err => {
        if(err) throw err;
        console.log('successful');
    });
});
    fs.readFile('form.html', function(err, data){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
    });
    
    } else {
        fs.readFile('form.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
              });
            }}).listen(8080);