// userapi.js: router for user CRUD operations in the API
import express from "express"
export const userApp = express.Router()

let users = []

// GET /users - return the list of all users
userApp.get('/users', (req, res) => {
  res.json({ message: "all users", payload: users })
})

// POST /users - add a new user to the in-memory list
userApp.post('/users', (req, res) => {
  const newUser = req.body
  users.push(newUser)
  res.json({ message: "User created" })
})

// PUT /users - update an existing user by id
userApp.put('/users', (req, res) => {
  let modifieduser = req.body
  let index = users.findIndex((userobj) => userobj.id === modifieduser.id)

  if (index === -1) {
    return res.json({ message: "user not found" })
  }

  users.splice(index, 1, modifieduser)
  res.json({ message: "user updated" })
})

// DELETE /users/:id - remove a user by id
userApp.delete('/users/:id', (req, res) => {
  let idOfUrl = Number(req.params.id)
  let index = users.findIndex((userobj) => userobj.id === idOfUrl)

  if (index === -1) {
    return res.json({ message: "User not found to delete" })
  }

  users.splice(index, 1)
  res.json({ message: "user removed " })
})

// GET /users/:id - return a single user by id
userApp.get('/users/:id', (req, res) => {
  let idOfUrl = Number(req.params.id)
  let user = users.find((userObj) => userObj.id === idOfUrl)

  if (user === undefined) {
    return res.json({ message: "user not found" })
  }

  res.json({ message: "a user", payload: user })
})

// The commented code below shows older examples and notes
// userApp.get('/test/:id',(req,res)=>{
//     res.json({id: req.params.id})
// })
// module.exports = userApp

// // Create product API with below operations
// // create new product({productId,name,brand,price})
// // Read all products
// Read all product by brand
// update a product
// Delete a product by id
