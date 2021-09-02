const express = require('express');

const router = express.Router();
const Vehicle = require('../Models/Vehicle');

router.get('/', ((req, res) => {
    Vehicle.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}))

router.get( '/personal/:personid', ((req, res) => {
    Vehicle.find( {person: req.params.personId })
        .then( data => res.json( data ) )
        .catch(err => res.json(err));
}) );

router.post('/create', ((req, res) => {
    const vehicle = new Vehicle({
        plate: req.body.plate,
        maker: req.body.maker,
        model: req.body.model,
        year: req.body.year,
    });

    vehicle.save()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}))

module.exports = router;
