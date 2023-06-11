
const fetchBreed = require('./breedFetcher');
const breedName = process.argv[2];



fetchBreed(breedName, (error, description) => {
  if (error) {
    return console.log(`Failed: ${error}`);
  } else {
    return console.log(description);
  }
});