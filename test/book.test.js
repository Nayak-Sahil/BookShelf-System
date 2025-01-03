const Book = require("../app/book");

test('should create a book with correct properties', () => {
    const book = new Book('123-456-789', 'Test Title', 'Test Author', 2021, 5, 'General'); 
    expect(book.ISBN).toBe('123-456-789');
    expect(book.title).toBe('Test Title'); 
    expect(book.author).toBe('Test Author'); 
    expect(book.publicationYear).toBe(2021); 
    expect(book.copies).toBe(5);
    expect(book.category).toBe('General');
});

test('should create a book with undefined category', ()=>{
    const book = new Book('123-456-789', 'Test Title', 'Test Author', 2021, 5); 
    expect(book.category).toBe(undefined);
})