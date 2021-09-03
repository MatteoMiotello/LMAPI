const express = require('express');

const router = express.Router();
const Workshop = require('../Models/Workshop');
const Person = require("../Models/Person");

router.get('/', ((req, res) => {
    Workshop.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));

router.get('/find/:personId/:text', (req, res) => {
    Workshop.find({$text: {$search: req.params.text}})
        .then(data => {
            Person.findById(req.params.personId)
                .then(personData => {
                    res.json(data.filter(workshop => {
                        if (personData.preferredWorkshops.includes(workshop._id)) {
                            return false;
                        } else {
                            return true;
                        }
                    }));
                })
        })
})

router.post('/create', (req, res) => {
    const workshop = new Workshop({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        address: req.body.address,
        country: req.body.country,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone
    });

    workshop.save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.delete('/delete/:id', ((req, res) => {
    Workshop.findByIdAndDelete(req.params.id,
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

router.post('/sendPosition/:id', ((req, res) => {
    res.json({
        success: true
    })
}));
module.exports = router;

