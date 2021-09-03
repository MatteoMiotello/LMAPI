const mongoose = require('mongoose');

const BookingType = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model( 'BookingType', BookingType );
