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
		minlength: 1
    }}],
    description:  {
        type: String,
		default: "",
		minlength: 0
    },
    numfollowers: {
        type: Number,
        default: 0
    },
    followers: [ { username: {
        type: String,
		required: true,
		minlength: 1
		}}],
	isAdmin: {
		type: Boolean,
		default: false
	}
})

module.exports = { User }
