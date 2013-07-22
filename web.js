var fs = require('fs');
var data = fs.readFileSync('index.html', 'utf8');
var buf = new Buffer(data);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//    console.log(buf.toString());
    response.send(buf.toString());
//  response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
