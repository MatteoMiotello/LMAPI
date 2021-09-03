const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const {connection} = require("mongoose");

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('connection open');
});

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    (err) => {
        if (!err) {
            console.log('connected to db');
        } else {
            console.log('not connected to db')
        }
    });

// app.use(((req, res) => {
//     if (mongoose.connection.readyState !== 1) {
//         res.status(500).json({
//             error: 'db is not connected',
//         });
//     } else {
//         res.json(req.body);
//     }
// }))

app.get('/', ((req, res) => {
    res.send('Hello World');
}));

app.use('/vehicle', require('./Routes/VehicleRoute'));
app.use('/workshop', require('./Routes/WorkshopRoute'));
app.use('/booking', require('./Routes/BookingRoute'));
app.use('/person', require('./Routes/PersonRoute'));
app.use('/rental', require('./Routes/RentalRoute'));
