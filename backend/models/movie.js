const mongoose = require('mongoose')

const Movies = mongoose.model('Movies', {
	name: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    genres: [{
        type: String,
		required: true,
		minlength: 1
    }],
    director: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    description: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    actors: [{
        type: String,
		required: true,
		minlength: 1
    }]
})

module.exports = { Movies }