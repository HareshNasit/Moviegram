const { Movies } = require('./../../models/movie')

module.exports = { Counter }

const { Counter } = require('./../../models/counter')

function autoIncr(seqName){
    // inspiration:
    // https://blog.eduonix.com/web-programming-tutorials/learn-auto-increment-sequences-mongodb/
    let seqCounter = Counter.findAndModify({
       query:{_id: seqName },
       update: {$inc:{count:1}},
       new:true
    })
    return seqCounter.count;
}


module.exports = async (req, res) => {
    Movies.insert({
         "_id": autoIncr("moviecounter"),
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
