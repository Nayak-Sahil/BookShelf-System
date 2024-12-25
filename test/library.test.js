const Library = require('../app/library');
const Inventory = require('../app/inventory');
const Book = require('../app/book');

describe('Library', () => {
    let library, inventory, book;

    beforeEach(() => {
        inventory = new Inventory();
        book = new Book('002-555-362', 'Introduction to Jest', 'Sahil Nayak', 2024, 2); inventory.addBook(book);
        library = new Library(inventory); //* To make loose coupling between classes, inject the inventory object to the library class.
    });

    test('should initialize library with an inventory configuration', () => {
        expect(library.inventory).toBe(inventory);
    });

    test('should borrow a book if available', () => {
        library.borrowBook('002-555-362');
        expect(inventory.findBookByISBN('002-555-362').copies).toBe(1);
    });

    describe("Error handling", () => {
        test('should throw an error if book is not available', () => {
            library.borrowBook('002-555-362');
            library.borrowBook('002-555-362');

            expect(() => {
                library.borrowBook('002-555-362');
            }).toThrow("Book isn't available");
        });
    });
});
