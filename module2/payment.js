// payment.js
import { getCartItems, getCartTotal } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function processPayment(method, coupon) {

  if (method !== "upi" && method !== "card") {
    return "Invalid payment method";
  }

  const total = getCartTotal();
  const finalAmount = applyDiscount(total, coupon);

  return {
    items: getCartItems(),
    total: finalAmount,
    paymentMethod: method,
    status: "success"
  };
}