# Mailgunny

A tiny module to send emails through mailgun's API.

## Install

With [npm](http://npmjs.org):

	npm install mailgunny


## Example

``` js
var Mailgunny = require('mailgunny');

var mail = new Mailgunny({
	domain: 'example.com',
	key: 'mailgunapikey'
});

mail.send({
	from: 'nacho@libre.com',
	to: ['hector@jimenez.com', 'nacho@libre.com'],
	subject: 'You have not been baptizzzzed!',
	html: "<h1>I'm worried about your salvation and stuff...</h1>"
}, function(req, res){
	console.log('Email was sent.');
});
```


## API

### Initialize Properties

#### Required

* **domain** (String) _The domain that you have a mailgun DNS record setup to send email from_
* **key** (String) _The mailgun apikey_

#### Optional

* **complete** (Function) _The callback function if every email will use the same callback_


### Methods

#### .config(settings)

* See "Initialize Properties"

#### .send(email, callback)

##### email properties

* **from** (String || Array) _The email address(es) the email is coming from_
* **to** (String || Array) _The email address(es) the email is going to_
* **subject** (String) _The email's subject line_
* **html** (String) _The email body_
* **text** (String) _The email plain text_

##### callback(request, response)

* _The mailgun callback_


## License

MIT

## Todos

* tests