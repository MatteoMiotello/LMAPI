const express = require('express');

const router = express.Router();
const Vehicle = require('../Models/Vehicle');

router.get('/', ((req, res) => {
    Vehicle.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}))

router.get('/personal/:personId', ((req, res) => {
    Vehicle.find({person: req.params.personId})
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));

router.post('/create', ((req, res) => {
    const vehicle = new Vehicle({
        person: req.body.person,
        plate: req.body.plate,
        maker: req.body.maker,
        model: req.body.model,
        year: req.body.year,
    });

    vehicle.save()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}))


router.delete('/delete/:id', ((req, res) => {
    Vehicle.findByIdAndDelete(req.params.id,
        null,
        (err, doc) => {
            if (!doc) {
                res.status(404).send('Not found');
                return;
            }

            if (err) {
                res.status(500).json({
                    success: false,
                    error: err,
                });
            } else {
                res.json(doc)
            }
        })
}));

module.exports = router;
