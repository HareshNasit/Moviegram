const mongoose = require('mongoose')

const Movies = mongoose.model('Movies', {
	_id:{
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    genres: {
		type: Object,
		required: true
	},
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
    stars: [{
        type: String,
		required: true,
		minlength: 1
    }]
})

module.exports = { Movies }
