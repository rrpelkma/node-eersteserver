var http = require('http');
var express = require('express');

var app = express();

var mijnObject = { 
	mijntekst: 'Hello World!',
	label: "Nog meer tekst",
	mijnarray: [ "tekst", "nog meer tekst", 2 ],
	mijnobject: {
		mijnlabel: 'mijntekst',
		getal: 4
	}
};

app.get('/api/v1/hello', function(req, res){
	res.contentType('application/json');
	res.json(mijnObject);
});

app.listen(process.env.PORT || 3000, function(){
	console.log('De server luistert op port 3000');	
});
