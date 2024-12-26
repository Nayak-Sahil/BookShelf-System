# BookShelf - Efficient Library Management System
A simple and efficient system to manage essential library operations.

## System Information
The system is structured to be maintainable, and readable, and follows SOLID principles for better scalability and flexibility.

| 📦 Module                  | 💻 Description                                                                                          | 🛠️ Test File                     |
|-------------------------|------------------------------------------------------------------------------------------------------|-------------------------------|
| `book.js`              | ◻ Stores book details like ISBN, title, author, publication year, and copies.           | `book.test.js`                |
| `inventory.js`         | ◻ Handles inventory operations like add, find, check availability, and modify copies.   | `inventory.test.js`           |
| `library.js`           | ◻ Manages borrowing, returning, and viewing available books.                            | `library.test.js`             |
| `transaction.js`       | ◻ Records basic borrow and return transaction details.                                  | `transaction.test.js`         |
| `transactionManager.js`| ◻ Tracks all transactions and maintains borrower and return logs.                       | `transactionManager.test.js`  |

## Features  
-  **Books Storage**: Stores essential details for each book, including ISBN, title, author, publication year, and available copies.  
-  **Inventory Management**: Add books, locate specific books, check availability, and modify the inventory count as needed.  
-  **Library Operations**: Borrow books, return books, and view a list of available books in the library.  
-  **Transaction Management**: Keep track of individual transactions for borrowing and returning books.  
-  **Transaction Logging**: Maintain detailed logs of all borrow and return transactions for easy tracking and accountability.  

## Setup Guide
1. **Clone the repository** to your local machine using the following command.
```bash
  git clone https://github.com/Nayak-Sahil/BookShelf-System.git
```
2. Once the repository is cloned, **navigate to the project directory.**
```bash
  cd BookShelf-System
```
3. Run the following command to **install all the necessary dependencies**
```bash
  npm install
```
4. **To run all the test cases** for the project, use the following command
```bash
  npm test
```

## Coverage Report
<p><a href="https://book-shelf-system.vercel.app/lcov-report/index.html">Click here</a> to access the detailed test coverage report for the project</p>
<div align="center">
  <img width="675" align="center" src="https://github.com/Nayak-Sahil/BookShelf-System/blob/main/CoverageReport.png" alt="AllModuleTestReport" />
</div>

## All Module Test Report
<p>Overview of the test results for all the modules in the project</p>
<div align="center">
  <img align="center" src="https://github.com/Nayak-Sahil/BookShelf-System/blob/main/AllModuleTest.png" alt="AllModuleTestReport" />
</div>
