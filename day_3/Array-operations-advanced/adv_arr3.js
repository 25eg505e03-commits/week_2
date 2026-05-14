
// ADVANCED ASSIGNMENT 3: employee list with filter, map, reduce, find, and findIndex
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
]

// 1. Filter employees who work in the IT department
let itEmployees = employees.filter((emp) => emp.department === "IT")
console.log(itEmployees)

// 2. Map each employee to include a net salary with 10% bonus
let employeesWithNetSalary = employees.map((emp) => ({
  id: emp.id,
  name: emp.name,
  salary: emp.salary,
  department: emp.department,
  netSalary: emp.salary + emp.salary * 0.10
}))
console.log(employeesWithNetSalary)

// 3. Reduce to find the total salary payout for all employees
let totalSalaryPayout = employees.reduce((total, emp) => {
  return total + emp.salary
}, 0)
console.log(totalSalaryPayout)

// 4. Find the employee whose salary is exactly 30000
let employeeWith30000 = employees.find((emp) => emp.salary === 30000)
console.log(employeeWith30000)

// 5. Find the position of employee "Neha"
let nehaIndex = employees.findIndex((emp) => emp.name === "Neha")
console.log(nehaIndex)