const mongoose = require('mongoose');

const Vehicle = mongoose.Schema( {
    plate: {
        type: String,
        require: true
    },
    maker: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    }
} );

module.exports = mongoose.model( 'Vehicle', Vehicle )
