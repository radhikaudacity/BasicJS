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
let balances = {
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

const getTransactions = (accNo) => {
  const transArr = transactions.filter((transaction) => {
    console.log(accNo, transaction.accountNo);
    return transaction.type === 'withdrawal';
  });
};
const getBalance = (accNo) => {
  return balances[accNo];
};
const displayAccountsBeforeTransaction = () => {
  accounts.map((account) => {
    account.balance = getBalance(account.accountNo);
    console.log(account);
    console.log(getTransactions(account.accountNo));
    // console.log(getBalance(account.accountNo));
  });
};
const displayAccountsAfterTransaction = () => {
  accounts.map((account) => {
    account.balance = getBalance(account.accountNo);
    console.log(account);
    // console.log(getBalance(account.accountNo));
  });
};

displayAccountsBeforeTransaction();
/*

displayTotal
[
    { name: 'Arun', accountNo: '001', balance: 5000 },
    { name: 'Babu', accountNo: '002', balance: 2000 },
    { name: 'Chandra', accountNo: '003', balance: 0 }
  ]
  after transaction

  */
