const app = module.exports = require('express')();

/****** User routes ************************************ */
app.get('/:id', require("./get_user"))
app.get('/', require("./all_users"))
app.get('/get_friends/:id', require("./get_user_following"))

/*******************************************************/
