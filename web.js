// var express = require('express');
// var app = express.createServer(express.logger());
var express = require("express");
var app = express();
var fs = require('fs');
var htmlfile = "index.html";

app.get('/', function(request, response) {
  // response.send('Hello World2!');
  
  // Read from file
  var html = fs.readFileSync('index.html').toString();
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
