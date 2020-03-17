const mongoose = require('mongoose')

const User = mongoose.model('Review', {
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    content: {
        type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    date: {
        type: Date,
		required: true,
		minlength: 1,
		trim: true
    },
    spoilers: {
        type: Boolean,
		required: true,
    },
    comments: [{username: {type: String, 
                           required: True},
                date: Date, 
                content: {
                    type: String,
                    required: true,
                    minlength: 1,
                    trim: true
                }}]
})

module.exports = { Review }