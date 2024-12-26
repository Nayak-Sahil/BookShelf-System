const TransactionManager = require('../app/transactionManager');
const Transaction = require('../app/transaction');
const Book = require('../app/book');


test('should initialize with an empty transaction list', () => {
    const transactionManager = new TransactionManager();
    expect(transactionManager.transactions).toEqual([]);
});