class TransactionManager{
    constructor(){
        this.transactions = [];
    }

    logBorrowTransaction(transaction, transactionId){
        transaction.id = transactionId || Math.floor(Math.random() * 10000);
        this.transactions.push(transaction);
        return transaction;
    }
}

module.exports = TransactionManager;