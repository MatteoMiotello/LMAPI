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
    }
} );

module.exports = mongoose.model( 'Vehicle', Vehicle )
