var express = require('express');
var server = express();
// var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/client'));

server.get('/', function(req, res){
  res.sendFile('client/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
