const { Counters } = require('./../../models/counter')
const {Movies} = require('./../../models/movie')
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
  // console.log(Counter)
  // const x = new Counters({_id: "moviecounter", count: 2})
  // x.save().then(
  //   counter =>
  //   console.log(counter)
  // )
  Counters.findByIdAndUpdate("moviecounter",
    {$inc:{count:1}},
    {new:true}).then((counter) => {
      const movie = new Movies({
        "_id": counter.count,
        "title": req.body.title,
        "director": req.body.director,
        "stars": req.body.actors,
        "description": req.body.description,
        "genres": req.body.genres
      })
    }
   return movie.save()
 }).then(movie =>
  res.send(movie)).catch(error => console.log(error))
    // Movies.insert({
    //      "_id": autoIncr("moviecounter"),
    //      "title": req.body.title,
    //      "Director": req.body.director,
    //      "stars": req.body.actors,
    //      "description": req.body.description
    //    }).then(() => {
    //     res.status(200).send()
    //   }, (error) => {
    //     res.status(500).send(error) // server error
    //   })
    }
