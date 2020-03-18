/* Student mongoose model */
const mongoose = require('mongoose')

const User = mongoose.model('User', {
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    password: {
        type: String,
		required: true,
		minlength: 1
    },
    favoriteGenres: [{genre: {
        type: String,
		required: true,
		minlength: 1
    }}],
    description:  {
        type: String,
		required: true,
		minlength: 1
    },
    numfollowers: {
        type: Number,
        required: true
    },
    followers: [ { username: {
        type: String,
		required: true,
		minlength: 1
		}}],
		isAdmin: {
			type: Boolean,
			required: true
		}
})

module.exports = { User }
