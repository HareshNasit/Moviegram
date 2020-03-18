const app = module.exports = require('express')();

/****** User routes ************************************ */
app.get('/user/:id', require("./get_user"))
app.get('/all_users', require("./all_users"))

app.post('/add_user', require("./add_user"))
/*******************************************************/
