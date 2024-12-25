class Book{
    constructor(ISBN, title, author, publicationYear, copies){
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.copies = copies;
    }
}

module.exports = Book;