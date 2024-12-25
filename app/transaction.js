class Transaction {
    constructor(book, borrowDate, returnDate) {
        this.book = book;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate || null;
    }
}

module.exports = Transaction;
