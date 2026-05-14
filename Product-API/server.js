import exp from 'express'
const app = exp()
import { userApp } from "./API/userapi.js"
import { productApp } from "./apis/productapi.js"

// Parse JSON request bodies for all incoming requests
app.use(exp.json())

// Middleware 1 logs a message and forwards the request
function middleware1(req, res, next) {
  console.log("middleware1 executed")
  next()
}

// Middleware 2 logs a message and forwards the request
function middleware2(req, res, next) {
  console.log("middleware2 executed")
  next()
}

// Use middleware for every request
app.use(middleware1)
app.use(middleware2)

// Mount the user and product routers under specific paths
app.use('/users-api', userApp)
app.use('/products-api', productApp)

// Set the port number for the server
const port = 3000
app.listen(port, () => console.log(`server listening to port ${port}...`))

// The commented code below contains older route examples and notes
//     res.json({message:"This response for update user"})
// })
// // Route to handle DELETE req of client
// app.delete('/users',(req,res)=>{
//     res.json({message:"This response for delete user"})
// })
// Route to handle GET req of client(http://localhost:3000/users)
// Test data(Replace this test data with DB)