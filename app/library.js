class Library {
    constructor(inventory) {
        this.inventory = inventory;
    }

    borrowBook(ISBN) {
        if (this.inventory.isAvailable(ISBN)) {
            this.inventory.reduceCopy(ISBN);
        }else{
            throw new Error("Book isn't available");           
        }
    }

    returnBook(ISBN) {
        this.inventory.increaseCopy(ISBN);
    }
}

module.exports = Library;