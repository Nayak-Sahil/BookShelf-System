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
        inventory.addBook(book);

        let foundBook = inventory.findBookByISBN("332-999-001");
        expect(foundBook).toEqual(book);
    });
});