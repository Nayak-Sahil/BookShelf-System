class Inventory{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
    }
}

module.exports = Inventory;