class Library {
    constructor(inventory) {
        this.inventory = inventory;
    }

    borrowBook(ISBN) {
        if (this.inventory.isAvailable(ISBN)) {
            this.inventory.reduceCopy(ISBN);
        }
    }
}

module.exports = Library;