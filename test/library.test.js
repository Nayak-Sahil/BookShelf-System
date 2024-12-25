const Library = require('../app/library');
const Inventory = require('../app/inventory');

test('should initialize library with an inventory configuration', () => {
    const inventory = new Inventory();
    
    const library = new Library(inventory); //* To make loose coupling between classes, inject the inventory object to the library class.
    
    expect(library.inventory).toBe(inventory);
});
