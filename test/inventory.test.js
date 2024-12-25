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
        inventory.addBook(book);
        inventory.reduceCopy('332-999-001'); 
        expect(book.copies).toBe(1); 
    });
});