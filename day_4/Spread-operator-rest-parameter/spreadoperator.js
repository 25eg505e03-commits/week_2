// Exercise 1: copy an array and extend it using spread syntax
let fruits = ["apple", "banana"]

// Create a new array with an additional fruit
let moreFruits = [...fruits, 'orange']
console.log(fruits)
console.log(moreFruits)

// Exercise 2: update a user object using object spread
let user = {
  name: "Ravi",
  city: "Hyderabad"
}

let updatedUser = { ...user }
updatedUser.age = 25
console.log(user)
console.log(updatedUser)

// Exercise 3: use REST parameters to accept any number of arguments and sum them
function num(...a) {
  return a.reduce((acc, ele) => acc + ele)
}
let v = num(10, 20, 122)
console.log(v)

// The commented code below shows destructuring examples
// let arr=[10,20,30]
// let[a,b,c]=arr;
// console.log(a,b,c)

// let emp={
//     eid:100,
//     company:'tcs',
//     address:{
//         city:"hyd"
//     }
// }
// let{eid,company,address:{city}}=emp;
// console.log(eid,company,city)

