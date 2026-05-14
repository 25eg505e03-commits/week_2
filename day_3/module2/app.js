//main entry point for the module demo
import { getAllProducts } from "./product.js"
import { addToCart, getCartItems, getCartTotal } from "./cart.js"
import { processPayment } from "./payment.js"

// Show all available products
console.log("Products:", getAllProducts())

// Add products to the cart and show results
console.log(addToCart(1, 2))
console.log(addToCart(3, 1))

// Display current cart items and total cost
console.log("Cart:", getCartItems())
console.log("Total:", getCartTotal())

// Process a payment using UPI and a coupon code
console.log("Order:", processPayment("upi", "SAVEPOINTS"))