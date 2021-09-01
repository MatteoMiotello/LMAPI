const express = require('express');

const router = express.Router();
const Person = require( '../Models/Person');

router.get('/', ((req, res) => {
    Person.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));

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
})

module.exports = router;
