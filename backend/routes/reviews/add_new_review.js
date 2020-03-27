
const { Reviews } = require('./../../models/review')

module.exports = async (req, res) => {
    Reviews.insert({
         "_id": new ObjectId(),
         "username": req.body.username,
         "movie_title": req.body.movie_title,
         "content": req.body.content,
         "spoilers": req.body.spoilers,
         "comments": req.body.comments
       }).then(() => {
        res.status(200).send()
      }, (error) => {
        res.status(500).send(error) // server error
      })
}
