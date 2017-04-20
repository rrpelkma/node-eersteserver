var http = require('http');

http.createServer(function(request, response){
	console.log('Er was een request.');
	response.writeHead(200, {'Content-Type': 'text/json'});
	var json = JSON.stringify({
		tekst: "Ik ben verliefd! x ramon"
	});
	response.end(json);
}).listen(process.env.PORT || 3000);

console.log('De server luistert op port 3000');