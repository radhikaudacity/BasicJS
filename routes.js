routes = [
  {
    start: 'chennai',
    end: 'trichy',
    stops: ['chennai', 'viluppuram', 'trichy'],
  },
  {
    start: 'chennai',
    end: 'karur',
    stops: ['chennai', 'trichy', 'karur'],
  },
  {
    start: 'trichy',
    end: 'tirunelveli',
    stops: ['trichy', 'madurai', 'tirunelveli'],
  },
];
const distances = [
  {
    start: 'tambaram',
    end: 'viluppuram',
    distance: 80,
  },
  {
    start: 'chennai',
    end: 'viluppuram',
    distance: 166,
  },
  {
    start: 'trichy',
    end: 'viluppuram',
    distance: 165,
  },
  {
    start: 'trichy',
    end: 'madurai',
    distance: 138,
  },
  {
    start: 'madurai',
    end: 'tirunelveli',
    distance: 171,
  },
  {
    start: 'tirunelveli',
    end: 'kanyakumari',
    distance: 85,
  },
  {
    start: 'trichy',
    end: 'karur',
    distance: 83,
  },
];

const getLegs = ({ stops }) =>
  stops.reduce(
    (accumulator, currentValue, currentIndex, array) =>
      currentIndex !== stops.length - 1
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

const findSubRouteFromRoutes = (leg, routes) => {
  const bigLegFromRoutes = routes.find(findLeg(leg));
  const subRouteFromRoutes = getSubRoutes(
    getLegs(bigLegFromRoutes),
    distances,
    routes
  );

  return subRouteFromRoutes;
};
const findSubRoutes = (distances, routes) => (leg) =>
  distances.find(findLeg(leg)) || findSubRouteFromRoutes(leg, routes);

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
const getTotalDistance = (acc, cur) => acc + cur.distance;

const addTotalDistance = (routes) =>
  routes.map((route) => ({
    ...route,
    totalDistance: route.subRoutes.reduce(getTotalDistance, 0),
  }));

const displayTotalRoutes = (routes) => console.table(routes);

const main = (routes, distances) => {
  const withSubRoutes = addSubRoutes(routes, distances);
  const withDistanceofSubRoutes = addTotalDistance(withSubRoutes);
  displayTotalRoutes(withDistanceofSubRoutes);
};

main(routes, distances);
