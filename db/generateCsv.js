const faker = require('faker');
const { writeFile } = require('fs');

const generateUserCSV = (numberOfEntries) => {
  let userCsvData = 'id,username,user_image\n';

  for (let i = 0; i < numberOfEntries; i += 1) {
    const userId = i + 1;
    const newDummyName = faker.name.findName();
    const imageLink = `https://s3.us-east-2.amazonaws.com/fakebnb-reviews/${i}.jpg`;
    userCsvData += `${userId},${newDummyName},${imageLink}\n`;
  }

  writeFile(`${__dirname}/users.csv`, userCsvData, (err) => {
    if (err) {
      console.log('could not create users.csv');
      return;
    }

    console.log('users.csv was successfully generated');
  });
};

const generateReviewCSV = (numberOfEntries) => {
  let reviewsCsvData = 'id,user_id,date,review_body,accuracy,communication,cleanliness,location,checkin,value\n';
  const generateFiveStarReview = () => Math.floor((Math.random() * 5) + 1);

  for (let i = 0; i < numberOfEntries; i += 1) {
    const reviewId = i + 1;
    const userId = Math.floor((Math.random() * 9) + 1);
    const date = faker.fake('{{date.past}}');
    const formattedDate = new Date(date).toISOString();
    const reviewBody = faker.fake('{{lorem.paragraph}}');
    const accuracy = generateFiveStarReview();
    const communication = generateFiveStarReview();
    const cleanliness = generateFiveStarReview();
    const location = generateFiveStarReview();
    const checkin = generateFiveStarReview();
    const value = generateFiveStarReview();

    reviewsCsvData += `${reviewId},\
${userId},\
${formattedDate},\
"${reviewBody}",\
${accuracy},\
${communication},\
${cleanliness},\
${location},\
${checkin},\
${value}\n`;
  }

  writeFile(`${__dirname}/reviews.csv`, reviewsCsvData, (err) => {
    if (err) {
      console.log('could not create reviews.csv');
      return;
    }

    console.log('reviews.csv was successfully generated');
  });
};

generateUserCSV(10);
generateReviewCSV(100);
