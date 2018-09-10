DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;
USE reviews;

-- USER TABLE
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  user_image VARCHAR(100),
  PRIMARY KEY (id)
);

-- LISTINGS TABLE
CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- HOST RESPONSE TABLE
CREATE TABLE responses (
  id INT NOT NULL AUTO_INCREMENT,
  response_text VARCHAR(500) NOT NULL,
  response_date DATETIME NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- REVIEWS TABLE
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  listing_id INT NOT NULL,
  date DATETIME NOT NULL,
  review_body VARCHAR(500) NOT NULL,
  host_response_id INT,
  accuracy INT NOT NULL,
  communication INT NOT NULL,
  cleanliness INT NOT NULL,
  location INT NOT NULL,
  checkin INT NOT NULL,
  value INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (host_response_id) REFERENCES responses(id)
);


LOAD DATA LOCAL INFILE './db/users.csv'
    INTO TABLE users
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES;

LOAD DATA LOCAL INFILE './db/listings.csv'
    INTO TABLE listings
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES;

LOAD DATA LOCAL INFILE './db/responses.csv'
    INTO TABLE responses
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES;

LOAD DATA LOCAL INFILE './db/reviews.csv'
    INTO TABLE reviews
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES;
