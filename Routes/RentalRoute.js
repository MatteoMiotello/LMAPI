const express = require('express');

const router = express.Router();
const Rental = require('../Models/Rental');

router.get('/', ((req, res) => {
    Rental.find()
        .populate('vehicle')
        .populate('person')
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
}));

router.get('/details/:id', ((req, res) => {
    Rental.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
}))

router.get( '/personal/:personId', ( (req, res) => {
    Rental.findOne( { person: req.params.personId } )
        .populate( { path:'vehicle', select:'-_id plate maker model' } )
        .select( 'installment startDate vehicle frequency' )
        .then( data => {
            res.json( data );
        } ).catch( err => res.json( err ) );
} ) )

router.post('/create', ((req, res) => {
    const rental = new Rental({
        installment: req.body.installment,
        vehicle: req.body.vehicle,
        person: req.body.person,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        frequency: req.body.frequency,
    });

    rental.save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));

module.exports = router;
