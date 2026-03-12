import exp from 'express'
const app=exp()
import {userApp} from "./API/userapi.js";
import {productApp} from "./apis/productapi.js";

//use body body parser middleware
app.use(exp.json());

// create custom middleware
function middleware1(req,res,next){
    // send response from middleware 
    // res.json({message:"this res from middleware1"})
    // forward req to res
    console.log("middleware1 executed");
    next();

}
function middleware2(req,res,next)
{
    //send res from middleware
    // res.json({message:"this res from middleware2"})
    // forward req to next
    console.log(" middleware2 executed");
    next()
    

}
// use middleware
app.use(middleware1)
app.use(middleware2)
// forward req to userApi if path starts with /
app.use('/users-api', userApp)
app.use('/products-api',productApp)
// set a port number
const port=3000
// Assign port number to HTTP Server
app.listen(port ,()=> console.log(`server listening to port ${port}...`))
//     res.json({message:"This response for update user"})
// })
// // Route to handle DELETE req of client
// app.delete('/users',(req,res)=>{
//     res.json({message:"This response for delete user"})
// })
// Route to handle GET req of client(http://localhost:3000/users)
// Test data(Replace this test data with DB)