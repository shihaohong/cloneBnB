const express = require('express');
const { getReviews } = require('../db/index.js');

const app = express();

app.use(express.static('public'));

app.get('/reviews/:id', (req, res) => {
  const listingId = req.params.id;
  getReviews(listingId, (err, results) => {
    if (err) {
      return res.status(500).send();
    }

    return res.status(200).send(results);
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
