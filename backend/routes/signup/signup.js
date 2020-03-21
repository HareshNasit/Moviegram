const User = require('./../../models/user')
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const saltRounds = 10;
    if(!req.body.password){
      res.status(400).send("Missing passsword")
    }
    if(!req.body.username){
      res.status(400).send("Missing username")
    }
    console.log(req.body.genres)
    if(!req.body.genres && req.body.genres != {}){
      res.status(400).send("Missing genres")
    }
    if(!req.body.email){
      res.status(400).send("Missing email")
    }
    const password = req.body.password
    const username = req.body.username
    const genres = req.body.genres
    const email = req.body.email
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
          if (err) {
            res.status(500).send(err)
          } else {
            const newUser = {
              _id: username,
              password: hash,
              favoriteGenres: genres,
              email: email
            }
            const user = new User(newUser);
            user.save().then((result) => {
              res.send(result)
            }, (error) => {
              res.status(400).send(error) // 400 for bad request
            })
          }
      });
    })
  }
