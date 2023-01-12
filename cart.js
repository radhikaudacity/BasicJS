const rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

const discounts = {
  // values are in percentages.
  Apple: 10,
};

const taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

const purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
];

/* Functions */
const getDiscountPercent = (productName) => discounts[productName] / 100 || 0;

const getTaxPercent = (productName) => taxes[productName] / 100 || 0;

const getUnitPrice = (itemName) => rates[itemName] || 0;

const getLineItemPrice = (lineItem) =>
  lineItem.units * getUnitPrice(lineItem.item) || 0;

const getLineItemTotal = (partialSum, purchase) => {
  const lineItemPrice = getLineItemPrice(purchase);

  return (
    partialSum +
    lineItemPrice -
    lineItemPrice * getDiscountPercent(purchase.item) +
    lineItemPrice * getTaxPercent(purchase.item)
  );
};

const getSum = () => purchases.reduce(getLineItemTotal, 0);

const displayTotal = (total) => {
  console.log(total);
};
// Do not change below this line.
/* Main Function */
const main = function main() {
  const total = getSum();
  displayTotal(total);
};

main();
