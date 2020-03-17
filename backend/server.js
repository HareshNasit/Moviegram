/* server.js, with mongodb API and static directories */
'use strict';
const log = console.log
const path = require('path')

const express = require('express')
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('mongoose')

// import the mongoose models
// models

// to validate object IDs
const { ObjectID } = require('mongodb')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())


/*********************************************************/

/*** API Routes below ************************************/


/****** User routes ************************************ */
app.get('/users/:id', (req, res) => {
	
})

app.post('/users', (req, res) => {
	
})
/*******************************************************/


/****** Movie routes *************************************/
app.get('/movies/:id', (req, res) => {
	
})

app.get('/movies', (req, res) => {
	
})
/*******************************************************/


/****** Movie routes *************************************/

app.get('/reviews/:id', (req, res) => {
	
})

app.post('/reviews/:id', (req, res) => {
	
})
/*******************************************************/




/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 
