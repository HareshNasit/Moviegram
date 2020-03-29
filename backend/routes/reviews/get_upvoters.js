
const { ObjectID } = require('mongodb')
const { Reviews } = require('./../../models/review')

module.exports = async (req, res) => {

	const id = req.params.id

	console.log(req.params.id);

	if (!ObjectID.isValid(req.params.id)) {
		res.status(404).send()
		return;
	}

	Reviews.findById(id).then((review) => {
		console.log(review);
		res.send(review.upvoters)
	}).catch((error) => {
		res.status(404).send(error)
	})
}
