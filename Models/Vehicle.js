const mongoose = require('mongoose');
const Vehicle = mongoose.Schema( {
    plate: {
        type: String,
        required: true
    },
    maker: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }
} );

module.exports = mongoose.model( 'Vehicle', Vehicle )
