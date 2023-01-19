const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const generateRandomHexaCharacter = () => {
  const num = generateRandomNumber(0, 16);
  return num.toString(16);
};
const displayHexaChar = () => {
  console.log(generateRandomHexaCharacter());
};
const main = () => {
  displayHexaChar();
};

main();
