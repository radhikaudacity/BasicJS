const { readInput } = require('./readInput');

const getLegs = ({ stops }) =>
  stops
    .split(',')
    .reduce(
      (accumulator, currentValue, currentIndex, array) =>
        currentIndex !== stops.split(',').length - 1
          ? [
              ...accumulator,
              { start: array[currentIndex], end: array[currentIndex + 1] },
            ]
          : accumulator,
      []
    );

const findLeg = (leg) => (item) =>
  (item.start === leg.start && item.end === leg.end) ||
  (item.start === leg.end && item.end === leg.start);

const findSubRouteFromRoutes = (leg, routes, distances) => {
  const bigLegFromRoutes = routes.find(findLeg(leg));
  const subRouteFromRoutes = getSubRoutes(
    getLegs(bigLegFromRoutes),
    distances,
    routes
  );

  return subRouteFromRoutes;
};
const findSubRoutes = (distances, routes) => (leg) =>
  distances.find(findLeg(leg)) ||
  findSubRouteFromRoutes(leg, routes, distances);

const getSubRoutes = (legs, distances, routes) =>
  legs.map(findSubRoutes(distances, routes)).flat();

const addSubRoutes = (routes, distances) =>
  routes.map((route) => {
    const legs = getLegs(route);

    const subRoutes = getSubRoutes(legs, distances, routes);

    return {
      ...route,
      subRoutes: subRoutes,
    };
  });
const getTotalDistance = (acc, cur) => acc + Number(cur.distance);

const addTotalDistance = (routes) =>
  routes.map((route) => ({
    ...route,
    totalDistance: route.subRoutes.reduce(getTotalDistance, 0),
  }));

const displayTotalRoutes = (routes) => console.table(routes);

const main = async () => {
  const { distances, routes } = await readInput();

  const withSubRoutes = addSubRoutes(routes, distances);
  const withDistanceofSubRoutes = addTotalDistance(withSubRoutes);
  displayTotalRoutes(withDistanceofSubRoutes);
};

main();
