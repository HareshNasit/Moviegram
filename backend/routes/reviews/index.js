
const app = module.exports = require('express')();

/****** Review routes *************************************/

app.get('/', require("./all_reviews"))
// app.get('/:id', require("./get_friends_reviews"))
app.get('/:id', (req, res) => {

})
app.get('/user_reviews/:username', require("./get_user_reviews"))
app.post('/:id', (req, res) => {

})
/*******************************************************/
