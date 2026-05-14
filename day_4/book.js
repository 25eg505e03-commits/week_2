// ASSIGNMENT 1: Book class demonstration with borrow/return and status checks

// Class to represent a book and its checkout behavior
class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isAvailable = isAvailable
  }

  // Mark the book as borrowed
  borrow() {
    this.isAvailable = false
  }

  // Mark the book as returned and available again
  returnBook() {
    this.isAvailable = true
  }

  // Return a plain text description of the book
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`
  }

  // Check if the book is long (more than 300 pages)
  isLongBook() {
    return this.pages > 300
  }
}

// Create five book objects with initial availability
let book1 = new Book("harry potter", "hobbit", 259, true)
console.log(book1)
let book2 = new Book("harry ", "hob", 400, true)
console.log(book2)
let book3 = new Book("potter", "bobby", 292, false)
console.log(book3)
let book4 = new Book("hobbit", "brown", 500, true)
console.log(book4)
let book5 = new Book("hobbii", "nigg", 50, false)
console.log(book5)

const books = [book1, book2, book3, book4, book5]

console.log("All Books Info")
books.forEach((book) => console.log(book.getInfo()))

// Borrow two books and show the new availability state
console.log("Borrowing Books")
book1.borrow()
book2.borrow()
console.log(`${book1.title} available: ${book1.isAvailable}`)
console.log(`${book2.title} available: ${book2.isAvailable}`)

// Return one book and log the updated status
console.log("\n Returning Book")
book1.returnBook()
console.log(`${book1.title} available: ${book1.isAvailable}`)

// Count long books using filter and length
console.log("\n Long Books Count")
let longBooks = books.filter((book) => book.isLongBook()).length
console.log(`Number of long books: ${longBooks}`)

// List only books that are currently available
console.log("\n Available Books")
books.filter((book) => book.isAvailable).forEach((book) => console.log(book.title))