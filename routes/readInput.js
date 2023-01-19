const csvToJson = require('csvtojson');

const readInput = async () => {
  const distances = await csvToJson().fromFile('./distances.csv');
  const routes = await csvToJson().fromFile('./routes.csv');

  return { distances, routes };
};

module.exports = { readInput };
