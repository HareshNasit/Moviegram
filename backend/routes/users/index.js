const app = module.exports = require('express')();

/****** User routes ************************************ */
app.get('/:id', require("./get_user"))
app.get('/', require("./all_users"))
app.get('/get_friends/:id', require("./get_user_following"))
app.put('/user_update_follow/:id', require('./update_user_follow'))
app.get('/get_followers/:id', require("./get_user_followers"))
app.put('/user_update_description/:id', require('./update_description'))
/*******************************************************/
