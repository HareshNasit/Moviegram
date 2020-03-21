
const app = module.exports = require('express')();

/****** Review routes *************************************/

app.get('/', require("./all_reviews"))
app.get('/:id', (req, res) => {

})

app.post('/:id', (req, res) => {

})
/*******************************************************/
