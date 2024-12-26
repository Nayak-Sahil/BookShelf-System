const TransactionManager = require('../app/transactionManager');
const Transaction = require('../app/transaction');
const Book = require('../app/book');


describe('TransactionManager', () => {
    let transactionManager;

    beforeEach(() => {
        transactionManager = new TransactionManager();
    });

    test('should initialize with an empty transaction list', () => {
        expect(transactionManager.transactions).toEqual([]);
    });

});