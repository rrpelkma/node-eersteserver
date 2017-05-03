var http = require('http');
var express = require('express');

var app = express();

http.createServer(function(request, response){
	console.log('Er was een request.');
	response.writeHead(200, {'Content-Type': 'text/json'});
	var json = JSON.stringify({
		tekst: "Hoi Frauke xxx"
	});
	response.end(json);
}).listen(process.env.PORT || 3000);

app.get('/api/v1/hello', function(req, res){
	res.contentType('application/json');
	res.json('{"tekst" : "hello world"}');
});

app.listen(process.env.PORT || 3000, function(){
console.log('De server luistert op port 3000')
});