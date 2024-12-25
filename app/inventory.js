class Inventory{
    constructor(){
        this.books = [];
    }

    addBook(book){ // Receive a book object and add it to the inventory
        this.books.push(book);
    }

    findBookByISBN(ISBN){
        return this.books.find(book => book.ISBN === ISBN);
    }
}

module.exports = Inventory;