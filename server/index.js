const express = require('express');
const { getReviews } = require('../db/index.js');

const app = express();

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/listings/:listingId', express.static('public'));

app.get('/listings/:listingId/reviews', (req, res) => {
  const { listingId } = req.params;
  getReviews(listingId, (err, results) => {
    if (err) {
      return res.status(500).send();
    }

    res.set('Cache-Control', 'public, max-age=60');
    return res.status(200).send(results);
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
