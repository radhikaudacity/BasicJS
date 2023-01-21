const csvToJson = require('csvtojson');

const readInput = async () => {
  const fees = await csvToJson().fromFile('./fees.csv');
  const fineDetails = await csvToJson().fromFile('./fineDetails.csv');
  const studentDetails = await csvToJson().fromFile('./studentDetails.csv');

  return { fees, fineDetails, studentDetails };
};

module.exports = { readInput };
