class TransactionManager{
    constructor(){
        this.transactions = [];
    }

    logBorrowTransaction(transaction, transactionID){
        transaction.ID = transactionID || Math.floor(Math.random() * 10000);
        this.transactions.push(transaction);
        return transaction;
    }

    findTransaction(transactionID){
        let foundTransaction = this.transactions.find((transaction) => transaction.ID == transactionID);

        if(foundTransaction == undefined){
            throw new Error(`Transaction with ID ${transactionID} not found`);
        }

        return foundTransaction;
    }

    logReturnTransaction(transactionID){
        const transaction = this.findTransaction(transactionID);
        transaction.returnDate = new Date();
        return transaction;
    }
}

module.exports = TransactionManager;