
const User = require('./../../models/user')

module.exports = async (req, res) => {
    User.findOne({_id: req.params.user_id}).then((user) => {
      res.send(user.image_url)
    }, (error) => {
      res.status(500).send(error) // server error
    })
  }
