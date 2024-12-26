class TransactionManager{
    constructor(){
        this.transactions = [];
    }

    storeTransaction(transaction){
        transaction.id = Math.floor(Math.random() * 10000);
        this.transactions.push(transaction);
        return transaction;
    }
}

module.exports = TransactionManager;