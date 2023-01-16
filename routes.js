routes = [
  {
    route: 'chennai-trichy',
    stops: ['chennai', 'viluppuram', 'trichy'],
  },
  {
    route: 'chennai-karur',
    stops: ['chennai', 'viluppuram', 'trichy', 'karur'],
  },
  {
    route: 'trichy-tirunelveli',
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
    start: 'viluppuram',
    end: 'trichy',
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

const getLegs = (multipleStopsAr) =>
  multipleStopsAr.reduce(
    (accumulator, currentValue, currentIndex, array) =>
      currentIndex !== multipleStopsAr.length - 1
        ? [...accumulator, array.slice(currentIndex, currentIndex + 2)]
        : accumulator,
    []
  );

const findStations = (stations) => (item) =>
  item.start === stations[0] && item.end === stations[1];

const addSubRoutes = (routes) =>
  routes.map((route, index) => {
    const legs = getLegs(route.stops);

    return {
      ...route,
      subRoutes: legs.map((stations) => distances.find(findStations(stations))),
    };
  });

const addTotalDistance = (routes) =>
  routes.map((route) => ({
    ...route,
    totalDistance: route.subRoutes.reduce(
      (acc, value) => acc + value.distance,
      0
    ),
  }));

const displayTotalRoutes = (routes) => console.table(routes);

const main = (routes) => {
  const withSubRoutes = addSubRoutes(routes);
  const distanceAddedRoutes = addTotalDistance(withSubRoutes);
  displayTotalRoutes(distanceAddedRoutes);
};

main(routes);
