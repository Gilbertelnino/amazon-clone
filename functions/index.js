const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51I6UpoDIaoPRpJEDJQGRaT4geeOuENHkJWraJF45DEAmKJYxJ4mo45bWga2tSRq5g5IQe7DaqSF6ymMwIaUjQxXq00xTR9431p'
);
// app config
const app = express();
app.use(cors({origin: true}));
app.use(express.json());

// middleware
// api routes
app.get('/', (req, res) => res.status(200).json({message: 'hello world'}));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('payment recieved >>>>', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// listen

// const PORT = process.env.PORT || 5500;

exports.api = functions.https.onRequest(app);

// (http://localhost:5001/clone-f13f7/us-central1/api).
