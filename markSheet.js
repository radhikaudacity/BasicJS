const markSheets = [
  {
    student: 'Sriram',
    rollNo: 11,
    marks: {
      tamil: 80,
      english: 90,
      science: 86,
      maths: 97,
      social: 76,
    },
  },
  {
    student: 'Ram',
    rollNo: 16,
    marks: {
      tamil: 90,
      english: 97,
      science: 100,
      maths: 34,
      social: 96,
    },
  },
  {
    student: 'sri',
    rollNo: 18,
    marks: {
      tamil: 60,
      english: 90,
      science: 63,
      maths: 93,
      social: 46,
    },
  },
  {
    student: 'mani',
    rollNo: 20,
    marks: {
      tamil: 79,
      english: 80,
      science: 91,
      maths: 93,
      social: 86,
    },
  },
  {
    student: 'praveen',
    rollNo: 80,
    marks: {
      tamil: 90,
      english: 80,
      science: 86,
      maths: 96,
      social: 77,
    },
  },
  {
    student: 'thiru',
    rollNo: 81,
    marks: {
      tamil: 90,
      english: 40,
      science: 80,
      maths: 68,
      social: 77,
    },
  },
  {
    student: 'manikandan',
    rollNo: 82,
    marks: {
      tamil: 100,
      english: 100,
      science: 34,
      maths: 100,
      social: 100,
    },
  },
];

const determinePass = (number) => number < 35;

const getRankedArray = () =>
  markSheets.map((canditate) => canditate.totalMarks).sort((a, b) => b - a);

const getCountPassFail = () => {
  const passFailAr = markSheets.map((canditate) => canditate.passOrFail);
  const passFailCount = passFailAr.reduce((acc, value) => {
    acc[value] ? acc[value]++ : (acc[value] = 1);
    return acc;
  }, {});
  return passFailCount;
};

const getConsolidatedMarksheet = (addRanking) => {
  markSheets.map(({ marks }, index) => {
    markSheets[index].totalMarks = Object.values(marks).reduce(
      (acc, value) => acc + value
    );
    markSheets[index].passOrFail = Object.values(marks).some(determinePass)
      ? 'F'
      : 'P';
  });
  addRanking(markSheets);
};
const addRanking = (markSheets) =>
  markSheets.map(
    (canditate) =>
      (canditate.rank = getRankedArray().indexOf(canditate.totalMarks) + 1)
  );

const displayConsolidatedMarksheet = () => {
  getConsolidatedMarksheet(addRanking);
  console.table(markSheets);
};
const displayCount = () => console.log(getCountPassFail());

const main = () => {
  displayConsolidatedMarksheet();
  displayCount();
};
main();
