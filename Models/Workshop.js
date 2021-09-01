const mongoose = require('mongoose');

const Workshop = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true,
    },
    zip: {
        type: Number,
        require: true,
    }
});
module.exports = mongoose.model( 'Workshop', Workshop );
