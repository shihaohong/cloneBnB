const axios = jest.genMockFromModule('axios');

let mockData = Object.create(null);
const setMockData = (newMockData) => {
  mockData = newMockData;
};

const get = (url) => {
  const resources = url.split('/');
  return new Promise((resolve, reject) => {
    if (url.includes('listings') && url.includes('reviews')) {
      resolve({ data: mockData });
    } else {
      reject('get request failed');
    }
  });
};

axios.setMockData = setMockData;
axios.get = get;

module.exports = axios;
