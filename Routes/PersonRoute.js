const express = require('express');

const router = express.Router();
const Person = require('../Models/Person');

router.get('/', ((req, res) => {
    Person.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
}));

router.get( '/details/:id', ( req, res ) => {
    Person.findOne( { _id: req.params.id } )
        .select( '-preferredWorkshops' )
        .then( data => res.json( data ) )
        .catch(err => res.json(err));
} );

router.get('/preferredWorkshops/:personId', (req, res) => {
    Person.findOne({_id: req.params.personId})
        .populate('preferredWorkshops')
        .select( 'preferredWorkshops -_id' )
        .then(data => {
            res.json(data.preferredWorkshops)
        })
        .catch(err => res.json(err));
});


router.patch( '/changePassword/:id', ( req, res ) => {
    Person.update(
        { _id: req.params.id, password: req.body.oldPassword },
        { password: req.body.newPassword },
        ( err, doc ) => {
            if ( err ) {
                res.json( err );
            } else {
                res.json( doc );
            }
        })
})

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
    Person.update(
        {_id: req.params.personId},
        {$push: {preferredWorkshops: req.body.workshop}},
        () => res.send('Completed')
    )
});


module.exports = router;
