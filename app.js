const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );
require( 'dotenv/config' );

app.use( bodyParser.json() );

app.listen( 3000 , () => console.log( 'connection open' ));

mongoose.connect( process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log( 'connected to db' ),
    (err) => console.log( err ) );

app.get( '/', ((req, res) => {
    res.send( 'Hello World' );
}) );

app.use( '/vehicle', require( './Routes/VehicleRoute' ) );
app.use( '/workshop', require( './Routes/WorkshopRoute' ) );
app.use( '/booking', require( './Routes/BookingRoute' ) );
app.use( '/person', require( './Routes/PersonRoute' ) );
