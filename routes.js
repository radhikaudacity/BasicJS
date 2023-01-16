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

const getTwoStopsAr = (multipleStopsAr) => {
  return multipleStopsAr.reduce(
    (accumulator, currentValue, currentIndex, array) => {
      if (currentIndex !== multipleStopsAr.length - 1) {
        accumulator.push(array.slice(currentIndex, currentIndex + 2));
      }
      return accumulator;
    },
    []
  );
};
const findStations = (stations) => {
  return (item) => item.start === stations[0] && item.end === stations[1];
};

const addSubRoutes = () => {
  routes.map((route, index) => {
    const twoStopsAr = getTwoStopsAr(route.stops);
    route.subRoutes = twoStopsAr.map((stations) =>
      distances.find(findStations(stations))
    );
    addTotalDistance(route.subRoutes, index);
  });

  return routes;
};

const addTotalDistance = (subRoutes, i) => {
  return (routes[i].totalDistance = subRoutes.reduce(
    (acc, value) => acc + value.distance,
    0
  ));
};
const displayTotalRoutes = () => {
  addSubRoutes();
  console.table(routes);
  routes.map((route) => console.table(route.subRoutes));
};
const main = () => {
  displayTotalRoutes();
};
main();
