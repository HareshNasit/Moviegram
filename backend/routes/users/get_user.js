
const { User } = require('./../../models/user')

module.exports = async (req, res) => {
    User.findOne({username: req.params.id}).then((user) => {
      res.send(user) 
    }, (error) => {
      res.status(500).send(error) // server error
    })
  }
