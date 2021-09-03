const express = require('express');

const router = express.Router();
const Person = require('../Models/Person');
const {route} = require("express/lib/router");

router.get('/', ((req, res) => {
    Person.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));

router.get('/details/:id', (req, res) => {
    Person.findOne({_id: req.params.id})
        .select('-preferredWorkshops')
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.get('/preferredWorkshops/:personId', (req, res) => {
    Person.findOne({_id: req.params.personId})
        .populate('preferredWorkshops')
        .select('preferredWorkshops -_id')
        .then(data => {
            res.json(data.preferredWorkshops)
        })
        .catch(err => res.json(err));
});


router.post('/login', ((req, res) => {
    Person.findOne({email: req.body.email})
        .select('-defaultWorkshop -preferredWorkshops')
        .then(data => {
            if (!data) {
                res.json({
                    success: false,
                    error: "email not found"
                })
            }

            if (data.password === req.body.password) {
                res.json(data);
            } else {
                res.json({
                    success: false,
                    error: "wrong password"
                })
            }
        }).catch(err => res.json(err));

}))

router.get('/defaultWorkshop/:id', ((req, res) => {
    Person.findById(req.params.id)
        .populate('defaultWorkshop')
        .then(data => {
            if (!data) {
                res.status(404).send('Not found');
            }

            res.json(data.defaultWorkshop)
        })
        .catch(err => res.json(err));
}))

router.post('/defaultWorkshop/:id', ((req, res) => {
    Person.findByIdAndUpdate(req.params.id,
        {
            defaultWorkshop: req.body.defaultWorkshop
        },
        {upsert: true}
    )
        .populate('defaultWorkshop')
        .then(data => {
            res.json(data.defaultWorkshop)
        })
        .catch(err => res.json(err));
}));

router.patch('/changePassword/:id', (req, res) => {
    Person.update(
        {_id: req.params.id, password: req.body.oldPassword},
        {password: req.body.newPassword},
        (err, doc) => {
            if (err) {
                res.json(err);
            } else {
                res.json(doc);
            }
        });
});

router.post('/removePreferredWorkshop/:personId', ((req, res) => {
    Person.findByIdAndUpdate(req.params.personId, {
        $pull: {
            preferredWorkshops: req.body.preferredWorkshop
        }
    })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}))

router.post('/create', (req, res) => {
    const person = new Person({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        birthDate: req.body.birthDate,
        phone: req.body.phone
    });

    person.save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

router.post('/addPreferredWorkshop/:personId', (req, res) => {
    Person.findByIdAndUpdate(
        req.params.personId,
        {$push: {preferredWorkshops: req.body.workshop}},
        (err, doc) => {
            if (!err) {
                res.json(doc);
            } else {
                res.json({
                    success: false,
                    error: err
                })
            }
        }
    )
});


module.exports = router;
