const superagent = require('superagent');


class Mailgunny {
  constructor(opts) {
    this.api = `https://api:${opts.key}@api.mailgun.net/v3/${opts.domain}/messages`;
  }

  send(email, callback) {
    superagent
      .post(this.api)
      .send(email)
      .type('form')
      .set('Accept', 'application/json')
      .end(callback || console.log);
  }
}


module.exports = (opts) => new Mailgunny(opts);
