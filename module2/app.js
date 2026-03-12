// app.js
import { getAllProducts } from "./product.js";
import { addToCart, getCartItems, getCartTotal } from "./cart.js";
import { processPayment } from "./payment.js";

console.log("Products:", getAllProducts());
console.log(addToCart(1, 2));
console.log(addToCart(3, 1));
console.log("Cart:", getCartItems());
console.log("Total:", getCartTotal());
console.log("Order:", processPayment("upi", "SAVEPOINTS"));