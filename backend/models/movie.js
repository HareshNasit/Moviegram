const mongoose = require('mongoose')

const User = mongoose.model('Movie', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	}
})

module.exports = { Movie }