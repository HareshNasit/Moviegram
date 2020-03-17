/* Student mongoose model */
const mongoose = require('mongoose')

const Comment = mongoose.model('Comment', {
    index: {
        type: Number,
		required: true,
		minlegth: 1,
		trim: true
    },
	userid: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
    },
    content: {
        type: String,
        required: true,
        minlegth: 0,
        trim: true
    },
    time_posted: {
        type: Date,
        required: true,

    },
    movie: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
    }
})

module.exports = { Comment }