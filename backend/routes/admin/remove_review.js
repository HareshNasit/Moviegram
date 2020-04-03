const { Reviews } = require('./../../models/review')

module.exports = async (req, res) => {

  const rev_user = req.body.username;
  const rev_movie = req.body.movie;
//  const movie = req.params.movie_title;
  // console.log(rev_user);
  // res.send(rev_user)
  Reviews.deleteOne({username: rev_user, movie_title: rev_movie})
          .then(review => {
              if (!review) {
                  res.status(404).send();
              } else {
                  res.send(review);
              }
          })
          .catch(error => {
              res.status(500).send(); // server error, could not delete.
          });
  }
