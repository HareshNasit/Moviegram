const { User } = require('./../../models/user')
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    /**** STILL NEED TO IMPLEMENT */
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
      // result == true
    });
  }
