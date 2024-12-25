const Inventory = require("../app/inventory");


describe('Inventory', () => {
    let inventory;
    
    beforeEach(() => {
        inventory = new Inventory();
    });

    test('should initialize inventory with an empty books array', () => {
        expect(inventory.books).toEqual([]);
    });
});