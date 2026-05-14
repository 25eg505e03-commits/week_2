// productapi.js: router for product CRUD operations in the API
import express from "express"
export const productApp = express.Router()

let products = []

// GET /products - return the list of products
productApp.get('/products', (req, res) => {
  res.json({ message: "all products", payload: products })
})

// POST /products - add a new product to the list
productApp.post('/products', (req, res) => {
  const newProduct = req.body
  products.push(newProduct)
  res.json({ message: "product created" })
})

// PUT /products - update an existing product by id
productApp.put('/products', (req, res) => {
  let modifiedproduct = req.body
  let index = products.findIndex((productobj) => productobj.id === modifiedproduct.id)

  if (index === -1) {
    return res.json({ message: "product not found" })
  }

  products.splice(index, 1, modifiedproduct)
  res.json({ message: "product updated" })
})

// DELETE /products/:id - remove a product by id
productApp.delete('/products/:id', (req, res) => {
  let idOfUrl = Number(req.params.id)
  let index = products.findIndex((productobj) => productobj.id === idOfUrl)

  if (index === -1) {
    return res.json({ message: "product not found to delete" })
  }

  products.splice(index, 1)
  res.json({ message: "product removed " })
})

// GET /products/:id - return a specific product by id
productApp.get('/products/:id', (req, res) => {
  let idOfUrl = Number(req.params.id)
  let product = products.find((productObj) => productObj.id === idOfUrl)

  if (product === undefined) {
    return res.json({ message: "product not found" })
  }

  res.json({ message: "a product", payload: product })
})

// Commented examples and notes from earlier code
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
