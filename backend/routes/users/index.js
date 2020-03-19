const app = module.exports = require('express')();

/****** User routes ************************************ */
app.get('/:id', require("./get_user"))
app.get('/', require("./all_users"))

app.post('/', require("./add_user"))
/*******************************************************/
