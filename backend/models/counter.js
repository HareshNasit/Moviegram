const mongoose = require('mongoose')

const Counter = mongoose.model('Counter', {
	_id: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    count: {
        type: Number,
        required: true
    }
})