class TransactionManager{
    constructor(){
        this.transactions = [];
    }

    storeTransaction(transaction){
        this.transactions.push(transaction);
        return transaction;
    }
}

module.exports = TransactionManager;