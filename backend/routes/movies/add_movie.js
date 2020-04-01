const { Movies } = require('./../../models/movie')

const { Counter } = require('./../../models/counter')

function autoIncr(seqName){
    // inspiration:
    // https://blog.eduonix.com/web-programming-tutorials/learn-auto-increment-sequences-mongodb/
    let seqCounter = Counter.findByIdAndUpdate({
       query:{_id: seqName },
       update: {$inc:{count:1}},
       new:true
    })
    return seqCounter.count;
}


module.exports = async (req, res) => {
  const movie = new Movies({
    "title": req.body.title,
    "director": req.body.director,
    "stars": req.body.actors,
    "description": req.body.description,
    "genres": req.body.genres
  })
  movie.save().then(
    result => {
      res.send(result);
    },
    error => {
      res.status(400).send(error); // 400 for bad request
    }
  );
  // console.log(Movies)
  // Movies.insert({
  //     "_id": autoIncr("moviecounter"),
  //     "title": req.body.title,
  //     "Director": req.body.director,
  //     "stars": req.body.actors,
  //     "description": req.body.description
  //    }).then(() => {
  //     res.status(200).send()
  //   }, (error) => {
  //     res.status(500).send(error) // server error
  //   })
}
