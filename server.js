var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes = require('./routes/fastfield');
var http = require('http');
var rp = require('request-promise');
var port = process.env.PORT || 8080;        // set our port

var authorize = (function(req,res){
	var options = {
	method: 'POST',
	uri: 'https://manage.fastfieldforms.com/api/authenticate',
	'auth': {
      'user': 'sreesh@onerent.co',
      'pass': 'Iopkjh123'
    },
	heaaders:{ },
	json:true 
	};
	rp(options)
		.then(function (body) {
			console.log('req');
			var retval = body;
	})
		.catch(function (err) {
			console.log('req');
    });
	return retval;
})();

var authorization = JSON.parse(authorize);
var token = authorization.sessionToken;
console.log(token);
app.use(bodyParser.urlencoded());

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/', function(req, res) {
    res.json({ message: 'onboard' });
	console.log('get call made');
});

app.post('/',function(req,res){
	console.log("authorize");
	var reqbody = req.body;
	var options = {
		method: 'POST',
		uri: 'https://manage.fastfieldforms.com/api/formdispatch',
		form: {
			reqbody
		},
		headers: {
			'X-Gatekeeper-SessionToken' : token
		}
	};
	rp(options)
		.then(function (body) {
			console.log('req');
			res.send(body);
	})
		.catch(function (err) {
			console.log('req');
    });
	console.log('request made');
});

app.listen(port);
console.log('hi');