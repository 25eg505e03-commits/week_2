// ADVANCED ASSIGNMENT 1: shopping cart operations with array methods
let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
]

// 1. Filter the cart to return only products that are in stock
let cart1 = cart.filter((prod) => prod.inStock === true)
console.log(cart1)

// 2. Map cart items to separate lists of names and prices
let cart2 = cart.map((prod1) => prod1.name)
let cart3 = cart.map((prod2) => prod2.price)
console.log(cart2)
console.log(cart3)

// 3. Reduce all product prices to a single total value
let cart4 = cart.reduce((acc, prod3) => acc + prod3.price, 0)
console.log(cart4)

// 4. Find details of the product named "Mouse"
let cart5 = cart.find((pro) => pro.name === "Mouse")
console.log(cart5)

// 5. Find the index of the product "Keyboard"
let cart6 = cart.findIndex((pro1) => pro1.name === "Keyboard")
console.log(cart6)