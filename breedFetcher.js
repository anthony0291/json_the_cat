
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = (breedName, callback) => {
  request(`${url}${breedName}`, (error, response, body) => {
  if (error) {
    callback(error, null);
  }
  const data = JSON.parse(body);
  console.log(data[0]);
  if (data.length < 1) {
      error = `fail`;
      return callback(error, null);
    }
      return callback(null, data[0].description.trim());
    });
  };

  module.exports = { fetchBreedDescription };


