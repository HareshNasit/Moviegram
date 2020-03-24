
const app = module.exports = require('express')();

app.get('/', require("./check_session"))
