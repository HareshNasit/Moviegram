
const app = module.exports = require('express')();

/****** Review routes *************************************/

app.get('/', require("./all_reviews"))
app.get('/user_reviews/:username', require("./get_user_reviews"))
app.get('/downvoters/:id', require("./get_downvoters"))
app.get('/upvoters/:id', require("./get_upvoters"))

app.get('/:id', (req, res) => {

})
app.post('/:id', (req, res) => {

})
/*******************************************************/
