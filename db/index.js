// file to seed database
const mysql = require('mysql');
const { mysqlOptions } = require('./config.js');

const connection = mysql.createConnection(mysqlOptions);

connection.connect((err) => {
  if (err) {
    console.error('failed to connect: ', err.stack);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});

const getReviews = (listingId, callback) => {
  // TODO: sort by most recent review first
  connection.query(`SELECT 
    reviews.id, reviews.accuracy, reviews.checkin,
    reviews.cleanliness, reviews.communication, reviews.value,
    reviews.date, reviews.location, 
    reviews.review_body AS reviewBody,
    users.id AS userId,
    users.user_image AS userImage,
    users.username
    FROM reviews
    INNER JOIN users 
    ON reviews.user_id = users.id 
    WHERE listing_id = ?`,
  [listingId],
  (err, results) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, results);
  });
};

module.exports = {
  getReviews,
};
