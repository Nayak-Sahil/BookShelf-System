const Transaction = require('../app/transaction');
const Book = require('../app/book');

test('should initialize transaction with specified book', () => {
    const book = new Book('000-000-111', 'Introduction to Jest', 2024, 5); 

    const transaction = new Transaction(book, new Date() - 2);
    expect(transaction.book).toBe(book);
});