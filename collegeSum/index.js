const { readInput } = require('./readInput');

const studentFeesDetails = (fees, fineDetails, studentDetails) =>
  studentDetails.map((detail) => {
    const fee = fees.find(({ courses }) => courses === detail.courses).fees;
    const penaltyAmt = fineDetails.find(
      ({ paidMonth }) => paidMonth === detail.paidMonth
    ).penaltyAmt;

    return { ...detail, fee, penaltyAmt };
  });

const display = (fees, fineDetails, studentDetails) =>
  console.table(studentFeesDetails(fees, fineDetails, studentDetails));

const main = async () => {
  const { fees, fineDetails, studentDetails } = await readInput();
  display(fees, fineDetails, studentDetails);
};

main();
