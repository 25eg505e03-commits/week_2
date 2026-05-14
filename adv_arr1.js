//ADVANCED ASSIGNMENT 1
let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//    1. Use filter()  get only inStock products
let cart1=cart.filter((prod)=>prod.inStock===true)
console.log(cart1)

// 2. Use map() to create a new array with:  { name, totalPrice }
let cart2=cart.map((prod1)=>prod1.name)
let cart3=cart.map((prod2)=>prod2.price)
console.log(cart2)
console.log(cart3)

// 3. Use reduce() to calculate grand total cart value
let cart4=cart.reduce((acc,prod3)=>acc+prod3.price,0)
console.log(cart4)

// 4. Use find() to get details of "Mouse"
let cart5=cart.find((pro)=>pro.name==="Mouse")
console.log(cart5)

// 5. Use findIndex() to find the position of "Keyboard"
let cart6=cart.findIndex((pro1)=>pro1.name==="Keyboard")
console.log(cart6)