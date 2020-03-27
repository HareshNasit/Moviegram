
const User = require('./../../models/user')

module.exports = async (req, res) => {
  User.findOne({_id: req.params.id}).then((user) => {
		res.send(user.following) // can wrap in object if want to add more properties
	}, (error) => {
		res.status(404).send(error) // server error
	})
}
