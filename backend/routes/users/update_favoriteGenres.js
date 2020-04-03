
const User = require('./../../models/user')

module.exports = async (req, res) => {
    // res.send(req.body.username)
    const username = req.params.id
    const favoriteGenres = req.body.favoriteGenres
    console.log(favoriteGenres);
    console.log(username);
      User.findByIdAndUpdate({"_id": username}, { "favoriteGenres": favoriteGenres })
        .then(user => {
            if (!user) {
                res.status(404).send();
            } else {
                res.send(user);
            }
        })
        .catch(error => {
            res.status(400).send(); // bad request for changing the student.
        });
  }
