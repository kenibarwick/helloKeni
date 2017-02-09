var alexa = require('alexa-app');
var rp = require('request-promise');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('helloworld');
var ENDPOINT = 'http://httpd.apache.org/server-status?view=json'

app.launch(function(req,res) {
	
	var options = {
		uri: ENDPOINT,
		transform: function (body, res, resolveWithFullResponse) {
			return JSON.parse(body);
		}
	};
	
	return rp(options)
		.then(function (bodyObj) 
		{
			var host = bodyObj.server.host;
			res.say(host).send();
			console.log(host);
		})
		.catch(function(err) {
			console.log(err)
		});
	
});

module.exports = app;
