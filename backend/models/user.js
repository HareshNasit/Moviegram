/* Student mongoose model */
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema
const UserSchema = new Schema({
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
    favoriteGenres: {
		type: Object,
		required: true
	},
    description:  {
        type: String,
		default: "",
		minlength: 0
    },
    numfollowers: {
        type: Number,
        default: 0
    },
  followers: [{type: String, default: "", minlength: 1}],
	following: [{type: String, default: "", minlength: 1}],
	isAdmin: {
		type: Boolean,
		default: false
	},
  image_url: {
      type: String,
	  required: true,
	  default: "https://l.messenger.com/l.php?u=https%3A%2F%2Fres.cloudinary.com%2Fmoviegramcloud%2Fimage%2Fupload%2Fv1586015404%2Fdefault-profile-picture_lp2ict.png&h=AT0tYinbg8q0dr3mvekxlFpSF_VtAm_UeFGRrLNqV8o65p_0sYzeoCpZ3yqiOS5737ZIddvXGb3g3ONYfBetJPL3EkRToXpF4gFkJf_4OURAVAoBRc2uy84cMTIGIg"
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
const User = mongoose.model('Users', UserSchema)

module.exports = User
