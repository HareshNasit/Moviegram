/* Student mongoose model */
const mongoose = require('mongoose')

const Comment = mongoose.model('Comment', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	}
})

module.exports = { Comment }