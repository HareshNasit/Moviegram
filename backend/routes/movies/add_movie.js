const { Movies } = require('./../../models/movie')


module.exports = async (req, res) => {
    Movies.insert({
         "_id": req.body.id,
         "title": req.body.title,
         "Director": req.body.director,
         "stars": req.body.actors,
         "description": req.body.description
       }).then(() => {
        res.status(200).send()
      }, (error) => {
        res.status(500).send(error) // server error
      })
    }