const app = module.exports = require('express')();


/****** Movie routes *************************************/
app.get('/', (req, res) => {res.send("Movies route")})
app.get('/get_movie/:id', require("./get_movie"))
app.get('/all_movies', require("./all_movies"))

/*******************************************************/
