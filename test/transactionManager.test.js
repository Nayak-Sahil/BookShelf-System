const TransactionManager = require('../app/transactionManager');
const Transaction = require('../app/transaction');
const Book = require('../app/book');


describe('TransactionManager', () => {
    let transactionManager, book;

    beforeEach(() => {
        transactionManager = new TransactionManager();
        book = new Book('123-456-789', 'Test Title', 'Test Author', 2021, 5);
    });

    test('should initialize with an empty transaction list', () => {
        expect(transactionManager.transactions).toEqual([]);
    });

    test('should create a transaction and add it to the transactions list', () => {
        const transaction = new Transaction(book, new Date());
        transactionManager.storeTransaction(transaction);

        expect(transactionManager.transactions).toContain(transaction);
    });

});