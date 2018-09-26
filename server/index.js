const express = require('express');
const bodyParser = require('body-parser');
const { addReview, getReviews } = require('../db/index.js');

const app = express();

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/listings/:listingId', express.static('public'));

app.use(bodyParser.json());

app.get('/listings/:listingId/reviews', (req, res) => {
  const { listingId } = req.params;
  getReviews(listingId, (err, results) => {
    if (err) {
      return res.sendStatus(500);
    }

    res.set('Cache-Control', 'public, max-age=60');
    return res.status(200).send(results);
  });
});

app.post('/listings/:listingId/reviews', (req, res) => {
  const { listingId } = req.params;
  const {
    userId,
    reviewBody,
    accuracy,
    communication,
    cleanliness,
    location,
    checkin,
    value,
  } = req.body;

  const reviewData = [
    userId,
    listingId,
    reviewBody,
    accuracy,
    communication,
    cleanliness,
    location,
    checkin,
    value,
  ];

  addReview(reviewData, (err) => {
    if (err) {
      return res.sendStatus(500);
    }

    return res.sendStatus(201);
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
