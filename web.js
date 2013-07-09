var express = require('express');
var js = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello World2!');
  
  // Read from file
  buf = fs.readFileSync('index.html');
  data = buf.toSting();
  
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
