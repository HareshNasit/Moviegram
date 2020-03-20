/* Student mongoose model */
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
	_id: {
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

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.getUserByUsernamePassword = function(username, password) {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ _id: username }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}
const User = mongoose.model('User', UserSchema)

module.exports = { User }
