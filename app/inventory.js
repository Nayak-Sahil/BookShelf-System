class Inventory {
    constructor() {
        this.books = [];
    }

    addBook(book) { // Receive a book object and add it to the inventory
        this.books.push(book);
    }

    findBookByISBN(ISBN) {
        return this.books.find(book => book.ISBN === ISBN);
    }

    isAvailable(ISBN) {
        const book = this.findBookByISBN(ISBN);
        return book && book.copies > 0;
    }

    reduceCopy(ISBN) {
        const book = this.findBookByISBN(ISBN);

        if (!book) {
            throw new Error(`Book with ISBN ${ISBN} not found.`);
        }

        if (book.copies === 0) {
            throw new Error(`No copies available for book with ISBN ${ISBN}.`);
        }

        if (book && book.copies > 0) {
            book.copies -= 1;
        }
    }

    increaseCopy(ISBN) {
        const book = this.findBookByISBN(ISBN);
        if (book) {
            book.copies += 1;
        }
    }
}

module.exports = Inventory;