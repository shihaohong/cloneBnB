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

-- REVIEWS TABLE
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  listing_id INT NOT NULL,
  date DATETIME NOT NULL,
  review_body VARCHAR(500) NOT NULL,
  accuracy INT NOT NULL,
  communication INT NOT NULL,
  cleanliness INT NOT NULL,
  location INT NOT NULL,
  checkin INT NOT NULL,
  value INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (listing_id) REFERENCES listings(id)
);

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/users.csv'
    INTO TABLE users
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES;

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/listings.csv'
    INTO TABLE listings
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES;

LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/reviews.csv'
    INTO TABLE reviews
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 LINES