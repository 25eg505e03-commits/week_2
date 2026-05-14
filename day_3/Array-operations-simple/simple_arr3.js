// SIMPLE ASSIGNMENT 3: marks array and basic array helpers
const marks = [78, 92, 35, 88, 40, 67]

// 1. Filter passing marks (greater than or equal to 40)
let mark = marks.filter((mar) => mar >= 40)
console.log(mark)

// 2. Add 5 grace marks to each score
let mark1 = marks.map((mar1) => mar1 + 5)
console.log(mark1)

// 3. Find the highest mark using reduce
let mark2 = marks.reduce((acc, ele) => (acc > ele ? acc : ele))
console.log(mark2)

// 4. List all marks below 40
let mark3 = marks.filter((mar) => mar < 40)
console.log(mark3)

// 5. Find the array index of mark 92
let mark4 = marks.findIndex((mar2) => mar2 === 92)
console.log(mark4)