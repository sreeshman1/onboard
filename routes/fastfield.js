var express = require('express');
var rp = require('request-promise');

/* authorize = function(req,res)
{
	var options = {
    uri: 'https://manage.fastfieldforms.com/api/authenticate',
    qs: {},
    headers:
    {
      Authorization: 'Basic c3JlZXNoQG9uZXJlbnQuY286SW9wa2poMTIz'
    },
    json:true
  };
  rp(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  });

}

var fastpost = function(req,res){
	var authorizaton = authorize();
	var token = authorization.sessionToken;
	var bod = req.body;
	var options = {
		method: 'POST',
		uri: 'https://manage.fastfieldforms.com/api/formdispatch',
		form: {
			bod
		},
		headers: {
			'X-Gatekeeper-SessionToken' : token
		}
	};
	rp(options)
		.then(function (body) {
			console.log('req');
	})
		.catch(function (err) {
			console.log('req');
    });
	console.log('request made');
}*/
