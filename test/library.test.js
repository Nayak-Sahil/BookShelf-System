const Library = require('../app/library');
const Inventory = require('../app/inventory');
const Book = require('../app/book');
const TransactionManager = require('../app/transactionManager');
const Transaction = require('../app/transaction');

describe('Library', () => {
    let library, inventory, book, transactionManager, borrowedDate;

    beforeEach(() => {
        inventory = new Inventory();
        book = new Book('002-555-362', 'Introduction to Jest', 'Sahil Nayak', 2024, 2, 'General'); 
        inventory.addBook(book);

        //? To inject TransactionManager in library
        transactionManager = new TransactionManager();

        borrowedDate = new Date();

        library = new Library(inventory, transactionManager); //* To make loose coupling between classes, inject the inventory object to the library class.
    });

    test('should initialize library with an inventory configuration', () => {
        expect(library.inventory).toBe(inventory);
    });

    test('should borrow a book if available', () => {
        library.borrowBook('002-555-362', borrowedDate);
        expect(inventory.findBookByISBN('002-555-362').copies).toBe(1);
    });

    test('should return a book if borrowed', () => {
        let borrowedTransaction = library.borrowBook('002-555-362', borrowedDate);
        library.returnBook('002-555-362', borrowedTransaction.ID);
        
        expect(inventory.findBookByISBN('002-555-362').copies).toBe(2);
    });

    describe("Integration With Transaction Module", ()=>{
        test('should borrow a book and log transaction', () => {
            let borrowedTransaction = library.borrowBook('002-555-362', borrowedDate);
            let borrowedBook = inventory.findBookByISBN('002-555-362');
            expect(borrowedBook.copies).toBe(1);

            expect(borrowedTransaction.borrowDate).toEqual(borrowedDate);
        });

        test('should return a book if borrowed', () => {
            let borrowedTransaction = library.borrowBook('002-555-362', borrowedDate);
            let returnBookTransaction = library.returnBook('002-555-362',borrowedTransaction.ID);

            expect(returnBookTransaction.returnDate).toBeDefined();
        });
    })

    describe("Error handling", () => {
        test('should throw an error if book is not available', () => {
            library.borrowBook('002-555-362');
            library.borrowBook('002-555-362');

            expect(() => {
                library.borrowBook('002-555-362');
            }).toThrow("Book isn't available");
        });
    });

    test("should return a book of specific category", ()=>{
        let book1 = new Book('002-555-368', 'Introduction to javascript', 'rahul patel', 2024, 2, "General"); 
        let book2 = new Book('002-555-361', 'Advance to Jest', 'Joy Ray', 2024, 3, "General"); 

        inventory.addBook(book1);
        inventory.addBook(book2);

        let books = library.getBooksByCategory('General');

        expect(books).toContain(book1);
        expect(books).toContain(book2);
    })
});
