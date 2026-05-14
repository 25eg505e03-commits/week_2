// cart.js
import { getProductById } from "./product.js";

let cart = [];

export function addToCart(id, quantity) {
  const product = getProductById(id);

  if (!product) return "Product not found";

  cart.push({ id, quantity });
  return "Added to cart";
}

export function getCartItems() {
  return cart;
}

export function getCartTotal() {
  let total = 0;

  for (let item of cart) {
    const product = getProductById(item.id);
    total += product.price * item.quantity;
  }

  return total;
}