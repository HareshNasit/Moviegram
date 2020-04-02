const app = module.exports = require('express')();


/****** Movie routes *************************************/
app.get('/', require("./all_movies"))
app.get('/movie/:id', require("./get_movie"))
app.get('/keypairs', require("./title_key_pairings"))
app.get('/genre/:genre', require("./movie_by_genre"))
app.get('/genre/', require("./all_genres"))
app.post('/movie/', require("./add_movie"))

app.get('/vote/:id/:upvoter', require('./get_voter'))
app.get('/rating/:id', require('./getRating'))

// Routes for modifying upvoting and downvoting
app.patch('/add_upvoter/:id/:upvoter', require('./addUpvoter'))
app.patch('/add_downvoter/:id/:downvoter', require('./addDownvoter'))

/*******************************************************/
