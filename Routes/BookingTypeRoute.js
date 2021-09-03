const express = require('express');

const router = express.Router();
const BookingType = require('../Models/BookingType');

router.get('/', ((req, res) => {
    BookingType.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));

router.post('/create', ((req, res) => {
    const bookingType = new BookingType({
        name: req.body.name,
    });

    bookingType.save()
        .then( data => res.json( data ) )
        .catch( err => res.json( err ) );
}));

module.exports = router;
