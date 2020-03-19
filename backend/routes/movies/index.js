const app = module.exports = require('express')();


/****** Movie routes *************************************/
app.get('/', require("./all_movies"))
app.get('/:id', require("./get_movie"))
app.get('/keypairs', require("./title_key_pairings"))

/*******************************************************/
