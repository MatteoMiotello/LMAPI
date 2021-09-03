const mongoose = require('mongoose');

const Booking = mongoose.Schema( {
    date: {
        type: Date,
        required: true
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    workshop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    bookingType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookingType',
        require: true,
    }
} );

module.exports = mongoose.model( 'Booking', Booking );
