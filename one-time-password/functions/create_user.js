const admin = require('firebase-admin');

module.exports = function(req, res) {
  if(!req.body.phone) {
    return res.status(422).send({ error: 'Invalid phone number. Verify the phone number nad try again.' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));
}
