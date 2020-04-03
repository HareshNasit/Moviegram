const app = module.exports = require('express')();

/****** Admin routes *************************************/
app.get('/', require("./all_reviews"))
app.delete('/remove_review/', require("./remove_review"))
app.post('/add_movie', require("./../movies/add_movie"))

/*******************************************************/
