const express = require('express');

const router = express.Router();
const Workshop = require('../Models/Workshop');

router.get('/', ((req, res) => {
    Workshop.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));


router.post('/create', (req, res) => {
    const workshop = new Workshop({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        street: req.body.street,
        country: req.body.country,
        state: req.body.state,
        zip: req.body.zip,
    });

    workshop.save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

module.exports = router;

