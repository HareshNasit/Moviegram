/* server.js, with mongodb API and static directories */
'use strict';
const log = console.log
const path = require('path')

const express = require('express')
// starting the express server
const app = express();

// mongoose and mongo connection
const mongoose = require('mongoose')

// import the mongoose models
// models

// to validate object IDs
const { ObjectID } = require('mongodb')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())


require('dotenv').config();


/***********************************************/
const uri = `mongodb+srv://harsh:${process.env.dbpass}@cluster0-mujm7.mongodb.net/moviegram?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
/***********************************************/


/*********************************************************/

/*** API Routes below ************************************/


app.use('/users', require('./routes/users'))
app.use('/movies', require('./routes/movies'))
app.use('/reviews', require('./routes/reviews'))
app.use('/signup', require('./routes/signup'))
app.use('/login', require('./routes/login'))


/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 
