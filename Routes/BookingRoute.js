const express = require('express');

const router = express.Router();
const Booking = require('../Models/Booking');

router.get('/', ((req, res) => {
    Booking.find()
        .populate( 'workshop' )
        .populate( 'vehicle' )
        .then( data => res.json( data ) )
        .catch(err => res.json(err));
}));

router.post('/create', (req, res) => {
    const booking = new Booking({
        date: req.body.date,
        vehicle: req.body.vehicle,
        workshop: req.body.workshop,
        bookingType: req.body.bookingType
    });

    booking.save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

module.exports = router;
