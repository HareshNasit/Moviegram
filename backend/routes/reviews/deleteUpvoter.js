
const { ObjectID } = require('mongodb')
const { Reviews } = require('./../../models/review')

module.exports = async (req, res) => {

    const rev_id = req.params.id
    const upvoter = req.params.upvoter

  	if (!ObjectID.isValid(rev_id)) {
  		res.status(404).send()
  		return;
  	}

  	Reviews.findById(rev_id).then((review) => {
  		if (!review) {
  			res.status(404).send()
  		} else {

        const index = review.upvoters.indexOf(downvoter)
        review.upvoters.splice(index, 1)

  			review.save().then((result) => {
  				res.send("Deleted upvoter: "+upvoter)
  			}, (error) => {
  				res.status(400).send(error)
  			})
  		}
  	}).catch((error) => {
  		console.log("500  error");
  		res.status(500).send()
  	})
}
