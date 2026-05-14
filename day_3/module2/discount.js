//apply a coupon discount to the total amount
export function applyDiscount(total, coupon) {
  if (coupon === "SAVEPOINT") {
    // Apply 10% discount when coupon matches
    return total - total * 0.10
  }
  return total
}