//cart management functions for adding items and calculating totals
import { getProductById } from "./product.js"

let cart = []

// Add a product to the cart by id and quantity
export function addToCart(id, quantity) {
  const product = getProductById(id)

  if (!product) return "Product not found"

  cart.push({ id, quantity })
  return "Added to cart"
}

// Return the current cart items
export function getCartItems() {
  return cart
}

// Calculate the total cost of items in the cart
export function getCartTotal() {
  let total = 0

  for (let item of cart) {
    const product = getProductById(item.id)
    total += product.price * item.quantity
  }

  return total
}