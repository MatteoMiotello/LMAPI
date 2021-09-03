const mongoose = require('mongoose');

const Rental = new mongoose.Schema({
    installment: {
        type: Number,
        required: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    },
    dateStart: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateEnd: {
        type: Date,
        required: false,
        default: null
    },
    frequency: {
        type: Number,
        required: true,
        default: 30
    }
});

module.exports = mongoose.model('Rental', Rental);
