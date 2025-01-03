const Transaction = require("./transaction");

class Library {
    constructor(inventory, transactionManager) {
        this.inventory = inventory;
        this.transactionManager = transactionManager;
    }

    borrowBook(ISBN, borrowedDate) {
        if (this.inventory.isAvailable(ISBN)) {
            let book = this.inventory.isAvailable('002-555-362');
            let initTransaction = new Transaction(book, borrowedDate);
            
            let borrowedTransaction = this.transactionManager.logBorrowTransaction(initTransaction);
            this.inventory.reduceCopy(ISBN);

            return borrowedTransaction;
        }else{
            throw new Error("Book isn't available");           
        }
    }

    getBooksByCategory(category){
        return this.inventory.books.filter((book) => book.category === category);
    }

    returnBook(ISBN, transactionID) {
        const returnedBookTransaction = this.transactionManager.logReturnTransaction(transactionID);        
        this.inventory.increaseCopy(ISBN);

        return returnedBookTransaction;
    }
}

module.exports = Library;