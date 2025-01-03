class Book{
    constructor(ISBN, title, author, publicationYear, copies, category){
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.copies = copies;
        this.category = category;
    }
}

module.exports = Book;