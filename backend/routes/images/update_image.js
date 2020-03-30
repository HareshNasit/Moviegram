
const User = require('./../../models/user')

module.exports = async (req, res) => {
    const username = req.params.user_id;
    const image_id = req.body.image_id
    const image_url = req.body.image_url
    User.findByIdAndUpdate({"_id": username}, { "image_id": image_id, "image_url": image_url })
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
