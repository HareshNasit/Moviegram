
const { Movies } = require('./../../models/movie')

module.exports = async (req, res) => {

    const movie_id = req.params.id
    const upvoter = req.params.upvoter

  	Movies.findById(movie_id).then((movie) => {
  		if (!movie) {
  			res.status(404).send()
  		} else {
        if(!movie.upvoters.includes(upvoter)) {
          if(!movie.upvoters.includes(upvoter) && !movie.downvoters.includes(upvoter)) {
            movie.upvoters.push(upvoter)
            movie.upvotes = movie.upvotes + 1
            movie.save().then((result) => {
      				res.send("Added upvoter")
      			}, (error) => {
					console.log(error)
      				res.status(400).send(error)
      			})
          } else if (movie.downvoters.includes(upvoter)) {
            const index = movie.downvoters.indexOf(upvoter)
            movie.downvoters.splice(index, 1)
            movie.downvotes = movie.downvotes - 1
            movie.upvoters.push(upvoter)
            movie.upvotes = movie.upvotes + 1
            movie.save().then((result) => {
      				res.send("Added upvoter")
      			}, (error) => {
					  
      				res.status(400).send(error)
      			})
          }
        } else {
          res.send("Already exists")
        }
  		}
  	}).catch((error) => {
  		console.log("500  error");
  		res.status(500).send()
  	})
}
