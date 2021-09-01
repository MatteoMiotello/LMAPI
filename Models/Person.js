const mongoose = require('mongoose');

const Person = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: true
    },
    preferredWorkshops: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop',
        default:[],
    } ]
});

module.exports = mongoose.model( 'Person', Person )
