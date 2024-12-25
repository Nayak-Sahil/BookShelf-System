const Inventory = require("../app/inventory");
const Book = require("../app/book");

describe('Inventory', () => {
    let inventory;
    let book;

    beforeEach(() => {
        inventory = new Inventory();
        book = new Book('332-999-001', 'Introduction to JS', 'Author', 2024, 2);
    });

    test('should initialize inventory with an empty books array', () => {
        expect(inventory.books).toEqual([]);
    });

    test('should add a book to the inventory', () => {
        inventory.addBook(book);
        expect(inventory.books).toContain(book);
    });

    test('should find a book by ISBN', () => {
        inventory.addBook(book); //? Add a book to the inventory to be able to find it

        let foundBook = inventory.findBookByISBN("332-999-001");
        expect(foundBook).toEqual(book);
    });

    test('should check if a book is available', () => {
        inventory.addBook(book); //? Add a book to the inventory to be able to check if it is available

        const isAvailable = inventory.isAvailable('332-999-001');
        expect(isAvailable).toBe(true);
    });

    test('should reduce a copy of the book', () => { 
        inventory.addBook(book); //? Add a book to the inventory to be able to reduce its copies

        inventory.reduceCopy('332-999-001'); 
        expect(book.copies).toBe(1);
    });
    
    test('should increase a copy of the book', () => { 
        inventory.addBook(book); //? Add a book to the inventory to be able to increase its copies

        inventory.increaseCopy('332-999-001'); 
        expect(book.copies).toBe(3); 
    });

    describe('Error Handling', () => {
        test('should throw an error if the book with the given ISBN is not found', () => {
            //* No book is added to the inventory with this ISBN.
            expect(() => inventory.reduceCopy('999-999-999')).toThrow('Book with ISBN 999-999-999 not found.');
        });
    
        test('should throw an error if the book has no copies left', () => {
            //* Firstly add a book to the inventory with 0 copies. 
            const noCopiesBook = new Book('123-456-789', 'Out of Stock', 'Author', 2024, 0);
            inventory.addBook(noCopiesBook);
    
            expect(() => inventory.reduceCopy('123-456-789')).toThrow('No copies available for book with ISBN 123-456-789.');
        });
    });
});