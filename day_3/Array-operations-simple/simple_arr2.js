// SIMPLE ASSIGNMENT 2: using filter, map, reduce, find, and findIndex
let courses = ["javascript", "react", "node", "mongodb", "express"]

// 1. Filter courses with name length greater than 5
let c1 = courses.filter((cou) => cou.length > 5)
console.log(c1)

// 2. Map course names to uppercase
let c2 = courses.map((coud) => coud.toUpperCase())
console.log(c2)

// 3. Reduce the uppercase names into one joined string
let c3 = courses
  .map((cou) => cou.toUpperCase())
  .reduce((acc, cou) => acc + " | " + cou)
console.log(c3)

// 4. Find the course named "react"
let c4 = courses.find((coud) => coud === "react")
console.log(c4)

// 5. Find the index of the course "node"
let c5 = courses.findIndex((coud) => coud === "node")
console.log(c5)