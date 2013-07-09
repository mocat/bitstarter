var fs = require('fs');
var data = fs.readFileSync('index.html');
var buf = new Buffer(data);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(buf.toString());
//  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
