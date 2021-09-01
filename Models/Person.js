const mongoose = require('mongoose');

const Person = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    birthDate: {
        type: String,
        require: false
    },
    phone: {
        type: Number,
        require: true
    },
    preferredWorkshops: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop',
        default:[],
    } ]
});

module.exports = mongoose.model( 'Person', Person )
