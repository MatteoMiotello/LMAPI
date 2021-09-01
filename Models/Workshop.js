const mongoose = require('mongoose');

const Workshop = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    }
});
Workshop.index( { '$**': 'text' } );

module.exports = mongoose.model( 'Workshop', Workshop );
