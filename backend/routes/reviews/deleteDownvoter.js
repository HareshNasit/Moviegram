
const { ObjectID } = require('mongodb')
const { Reviews } = require('./../../models/review')

module.exports = async (req, res) => {

    const rev_id = req.params.id
    const downvoter = req.params.downvoter

  	if (!ObjectID.isValid(rev_id)) {
  		res.status(404).send()
  		return;
  	}

  	Reviews.findById(rev_id).then((review) => {
  		if (!review) {
  			res.status(404).send()
  		} else {
        if(review.downvoters.includes(downvoter)) {
          const index = review.downvoters.indexOf(downvoter)
          review.downvoters.splice(index, 1)
          review.downvotes = review.downvotes - 1
    			review.save().then((result) => {
    				res.send("Deleted downvoter")
    			}, (error) => {
    				res.status(400).send(error)
    			})
        } else {
          res.send("Does not exists")
        }
  		}
  	}).catch((error) => {
  		console.log("500  error");
  		res.status(500).send()
  	})
}
