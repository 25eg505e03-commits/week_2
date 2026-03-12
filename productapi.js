// create mini-express app(separate Route)
import express from "express"
export const productApp=express.Router()

let products=[]
// create user 
productApp.get('/products',(req,res)=>{
    // read all users and send response
    res.json({message:"all products",payload:products})

    
})

// Route to handle POST req of client
productApp.post('/products',(req,res)=>{
    // get newuser from client
    const newProduct=req.body
    // push user into users
    products.push(newProduct)
    // send res
    res.json({message: "product created"})
})

// Route to handle PUT req of client
productApp.put('/products',(req,res)=>{
    // get modifiedusers from client
    let modifiedproduct=req.body;
    // get index of existing user in users array
    let index=products.findIndex(productobj=>productobj.id===modifiedproduct.id)
    // if user not found
    if(index===-1) {
        return res.json({message:"product not found"})
    }
    // update user with index
    products.splice(index,1,modifiedproduct)
    // send res
    res.json({message:"product updated"})

})
    
// Route to handle DELETE req of client
productApp.delete('/products/:id',(req,res)=>{
    // get id of user from url parameter
    let idOfUrl=Number(req.params.id )// {id:5}
    //find index of user
    let index=products.findIndex(productobj=>productobj.id===idOfUrl)
    // if user not found
    if(index===-1) {
        return res.json({message:"product not found to delete"})
    }
    // delete user by index
    products.splice(index,1)
    // send res
    res.json({message:"product removed "})
})

productApp.get('/products/:id',(req,res)=>{
    // get user if from url param
    let idOfUrl=Number(req.params.id)
    // find user
    let product=products.find(productObj=>productObj.id===idOfUrl)
    // if user not found
    if(product===undefined) {
        return res.json({message:"product not found"})
    }
    // send res
    res.json({message:"a product",payload:product})
})


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
