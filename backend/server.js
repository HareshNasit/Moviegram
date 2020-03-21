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
const cors = require('cors')
app.use(cors());

require('dotenv').config();


/***********************************************/
const uri = `mongodb+srv://harsh:${process.env.dbpass}@cluster0-mujm7.mongodb.net/moviegram?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
/***********************************************/

// express-session for managing user sessions
const session = require('express-session')
app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/
// Create a session cookie
app.use(session({
    secret: 'moviesarefun',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000,
        httpOnly: true
    }
}));

// Our own express middleware to check for
// an active user on the session cookie (indicating a logged in user.)
const sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/dashboard'); // redirect to dashboard if logged in.
    } else {
        next(); // next() moves on to the route.
    }
};

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
	if (req.session.user) {
		User.findById(req.session.user).then((user) => {
			if (!user) {
				return Promise.reject()
			} else {
				req.user = user
				next()
			}
		}).catch((error) => {
			res.status(401).send("Unauthorized")
		})
	} else {
		res.status(401).send("Unauthorized")
	}
}

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
