
const app = module.exports = require('express')();

/****** Review routes *************************************/

app.get('/', require("./all_reviews"))
app.get('/user_reviews/:username', require("./get_user_reviews"))
app.get('/:title/:username/:date', require("./get_upvoters"))
app.get('/:title/:username/:date', require("./get_downvoters"))
// app.get('/:id', require("./get_friends_reviews"))
app.get('/:id', (req, res) => {

})
app.post('/:id', (req, res) => {

})
/*******************************************************/
