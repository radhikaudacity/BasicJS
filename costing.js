const data = {
  cost: 10,
  name: 'buildHouse',
  tasks: [
    {
      cost: 5,
      name: 'purchase material',
      tasks: [
        {
          cost: 10,
          name: 'purchase cement',
        },
        {
          cost: 15,
          name: 'purchase steel',
        },
      ],
    },
    {
      cost: 0,
      name: 'invite people',
    },
  ],
};
function getNested(obj) {
  const costAr = [];

  const { tasks, cost } = obj;
  costAr.push(cost);
  costAr.push(tasks ? tasks.map((cur) => getNested(cur)) : 0);
  return costAr.flat(2).reduce((acc, cur) => acc + cur);
}

const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    nestedObj
  );
};

const displayCost = () => {
  //flattenAr(data);
  console.log(getNested(data));
  //console.log(totalCost);
};
const main = () => {
  displayCost();
};
main();
