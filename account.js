const accounts = [
  {
    name: 'Arun',
    accountNo: '001',
  },
  {
    name: 'Babu',
    accountNo: '002',
  },
  {
    name: 'Chandra',
    accountNo: '003',
  },
];
const balances = {
  // accountNo: balance
  '001': 5000,
  '002': 2000,
  '003': 0,
};

const transactions = [
  {
    accountNo: '001',
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: '001',
    type: 'deposit',
    amount: 500,
  },
  {
    accountNo: '001',
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: '002',
    type: 'deposit',
    amount: 300,
  },
  {
    accountNo: '002',
    type: 'withdrawal',
    amount: 200,
  },
  {
    accountNo: '003',
    type: 'deposit',
    amount: 200,
  },
];

const getBalance = (accNo, balances) => balances[accNo];

const displayAccountsDetails = (accounts, balances) => {
  const accountDetails = accounts.map((account) => ({
    ...account,
    balance: getBalance(account.accountNo, balances),
  }));
  console.table(accountDetails);
};

const impacts = { withdrawal: -1, deposit: 1 };

const updateBalances = (balances, transactions) => {
  let newBalances = { ...balances };
  transactions.map(
    ({ amount, type, accountNo }) =>
      (newBalances[accountNo] += amount * impacts[type])
  );

  return newBalances;
};

const main = () => {
  console.log('Balances before transactions');
  displayAccountsDetails(accounts, balances);
  const updatedBalances = updateBalances(balances, transactions);

  console.log('Balances after transactions');
  displayAccountsDetails(accounts, updatedBalances);
};

main();
