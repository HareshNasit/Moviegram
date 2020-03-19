const { User } = require('./../../models/user')

module.exports = async (req, res) => {
    res.send('Yalla');
}

// const user = req.body
// if(!user){
//   res
//     .status(400)
//     .send('Invalid User specified.')
//     .end();
// }
// User.insertOne({
// //_id: 7,  // can set your own id or use default
//   username: user.username,
//   email: user.email,
//   password: user.password,
//   favoriteGenres: user.favoriteGenres
//
// }, (error, result) => {
//   if (error) {
//     log("Can't insert user", error)
//   } else {
//     log(result.ops)
//     log(result.ops[0]._id.getTimestamp())
//   }
// })
