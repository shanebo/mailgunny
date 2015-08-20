var superagent = require('superagent');


var Mailgunny = function(settings){
	if (settings) this.config(settings);
	return this;
}


Mailgunny.prototype = {

	config: function(settings){
		this.api = 'https://api:' + settings.key + '@api.mailgun.net/v3/' + settings.domain + '/messages';
		return this;
	},

	send: function(email, callback){
		superagent
			.post(this.api)
			.send(email)
			.type('form')
			.set('Accept', 'application/json')
			.end(callback || this.complete);
	},

	complete: function(err, res){
		if (err) {
			console.log(res.status);
			console.log(err);
		} else if (res.status != 200) {
			console.log(res.status);
			console.log(res.body);
		} else {
			console.log(res.status);
			console.log(res.body);
		}
	}

};


module.exports = Mailgunny;