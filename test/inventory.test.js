const Inventory = require("../app/inventory");


test('should initialize inventory with an empty books array', () => {
    let inventory = new Inventory();
    expect(inventory.books).toEqual([]);
});