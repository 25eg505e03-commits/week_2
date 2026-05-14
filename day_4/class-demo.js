// ASSIGMENT 1: 26-02-26
// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)

//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise


//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.

//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books
 // i. Display info of all books


class Book {
    constructor(title, author, pages, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
}
    borrow() {
        this.isAvailable = false;
}
    returnBook() {
        this.isAvailable = true;
    }
    getInfo() {
        return (`${this.title} by ${this.author} (${this.pages} pages)`);
 }
    isLongBook() {
        return this.pages > 300;
    }
}
let book1= new Book("harry potter","hobbit",259,true);
console.log(book1);
let book2= new Book("harry ","hob",400,true);
console.log(book2);
let book3= new Book("potter","bobby",292,false);
console.log(book3);
let book4= new Book("hobbit","brown",500,true);
console.log(book4);
let book5= new Book("hobbii","nigg",50,false);
console.log(book5);
const books = [book1, book2, book3, book4, book5];
console.log("All Books Info");
books.forEach(book => console.log(book.getInfo()));

// ii. Borrow 2 books and show their availability status
console.log("Borrowing Books");
book1.borrow();
book2.borrow();
console.log(`${book1.title} available: ${book1.isAvailable}`);
console.log(`${book2.title} available: ${book2.isAvailable}`);

// iii. Return 1 book and show updated status
console.log("\n Returning Book");
book1.returnBook();
console.log(`${book1.title} available: ${book1.isAvailable}`);

// iv. Count how many books are "long books" (more than 300 pages)
console.log("\n Long Books Count");
let longBooks = books.filter(book => book.isLongBook()).length;
console.log(`Number of long books: ${longBooks}`);

// v. List all available books
console.log("\n Available Books");
books.filter(book => book.isAvailable).forEach(book => console.log(book.title));