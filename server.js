var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
// Built in node module. Http server. Tells node to start a new server and to use this express app as the boilerplate
var http = require('http').Server(app); 

// expose a folder '/public'
app.use(express.static(__dirname + '/public')); 

// start the server
http.listen(PORT, function () {
	console.log('Server started');
});