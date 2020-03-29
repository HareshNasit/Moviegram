
const app = module.exports = require('express')();

/****** Review routes *************************************/

app.get('/', require("./all_reviews"))
app.get('/user_reviews/:username', require("./get_user_reviews"))
app.get('/downvoters/:id', require("./get_downvoters"))
app.get('/upvoters/:id', require("./get_upvoters"))

// Routes for upvoting and downvoting
app.delete('/delete_upvoter/:id/:upvoter', require('./deleteUpvoter'))
app.delete('/delete_downvoter/:id/:downvoter', require('./deleteDownvoter'))
app.patch('/add_upvoter/:id/:upvoter', require('./addUpvoter'))
app.patch('/add_downvoter/:id/:downvoter', require('./addDownvoter'))

/*******************************************************/
