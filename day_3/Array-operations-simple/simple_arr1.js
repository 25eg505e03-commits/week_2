// SIMPLE ASSIGNMENT 1: simple array methods practice
let temp = [32, 35, 28, 40, 38, 30, 42]

// Filter numbers greater than 35
let f1 = temp.filter((element) => element > 35)
console.log(f1)

// Sum all numbers in the array
let f2 = temp.reduce((acc, element) => acc + element)
console.log(f2)

// Find the first number greater than 40
let f3 = temp.find((element) => element > 40)
console.log(f3)

// Find the position of the value 28
let f4 = temp.findIndex((element) => element === 28)
console.log(f4)