// discount.js

export function applyDiscount(total, coupon) {
  if (coupon === "SAVEPOINT") {
    return total - total * 0.10;
  }
  return total;
}