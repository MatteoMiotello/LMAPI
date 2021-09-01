const express = require('express');

const router = express.Router();
const Booking = require('../Models/Booking');
router.get('/', ((req, res) => {
    Booking.find()
        .populate('workshop')
        .populate('vehicle')
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));

router.get('/details/:id', (req, res) => {
    Booking.findOne({_id: req.params.id})
        .populate({path: 'workshop', select: '-_id'})
        .populate({path: 'vehicle', select: '-_id plate'})
        .select('bookingType date')
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

router.get('/all', ((req, res) => {
    Booking.find()
        .populate({path: 'workshop', select: 'name city -_id'})
        .select('date bookingType')
        .then(data => res.json(data))
        .catch(err => res.json(err));
}))

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

router.delete( '/delete/:id', (req, res) => {
    Booking.findByIdAndRemove( req.params.id, ( err ) => {
        if ( err ) {
            res.json( err );
        } else {
            res.json( {
                success: true
            } );
        }
    } )
} )

module.exports = router;
