const app = module.exports = require('express')();

/****** Admin routes *************************************/
app.get('/', require("./all_reviews"))
app.delete('/remove_review/:username/', require("./remove_review"))

/*******************************************************/
