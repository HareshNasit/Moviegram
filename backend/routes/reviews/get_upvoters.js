
const { Reviews } = require('./../../models/review')

module.exports = async (req, res) => {

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

  Reviews.findOne({_id: req.params.id}).then((review) => {
		res.send(review.upvoters)
	}, (error) => {
		res.status(404).send(error) // server error
	})
}
