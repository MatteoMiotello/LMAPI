const mongoose = require('mongoose');

const Booking = mongoose.Schema( {
    date: {
        type: Date,
        required: true
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle'
    },
    workshop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop',
    },
    bookingType: {
        type: String,
        require: true,
    }
} );

module.exports = mongoose.model( 'Booking', Booking );
