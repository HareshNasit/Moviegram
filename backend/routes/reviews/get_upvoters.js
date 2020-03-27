
const { Reviews } = require('./../../models/review')

module.exports = async (req, res) => {
  Reviews.findOne({"username": req.params.username}, {"movie_title": req.params.title}, {"date": req.params.date}).then((review) => {
		res.send(review)
	}, (error) => {
		res.status(404).send(error) // server error
	})
}
