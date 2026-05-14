// ADVANCED ASSIGNMENT 2: student marks and grade assignment
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
]

// 1. Filter students who passed with marks >= 40
let mark = students.filter((mark1) => mark1.marks >= 40)
console.log(mark)

// 2. Map students to include a grade field based on marks
let grades = students.map((student) => {
  let grade
  if (student.marks >= 90) grade = "A"
  else if (student.marks >= 75) grade = "B"
  else if (student.marks >= 60) grade = "C"
  else grade = "D"

  return {
    id: student.id,
    name: student.name,
    marks: student.marks,
    grade: grade
  }
})
console.log(grades)

// 3. Reduce to calculate average marks across all students
let mark3 = students.reduce((accu, student) => {
  return accu + student.marks
}, 0) / students.length
console.log(mark3)

// 4. Find the student who scored 92
let mark2 = students.find((mark4) => mark4.marks == 92)
console.log(mark2)

// 5. Find the index of student "Kiran"
let mark6 = students.findIndex((mark5) => mark5.name == "Kiran")
console.log(mark6)