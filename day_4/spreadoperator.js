// 💡 Exercise 1: Copy & Extend an Array
                        
                        
     let fruits = ["apple", "banana"];
      //-> Create a new array moreFruits
    let moreFruits=[...fruits,'orange']
    console.log(fruits)
     console.log(moreFruits)
                                    
//Exercise 2: Update User Object
                        
                        
                                
    let user = {
      name: "Ravi",
    city: "Hyderabad"
     };
                    
    let updatedUser={...user}
     updatedUser.age=25;
        console.log(user)
    console.log(updatedUser)
                        

//💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
function num(...a){
return a.reduce((acc,ele)=>acc+ele)
}
let v=num(10,20,122)
console.log(v)


//destructing(unpacking)
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


