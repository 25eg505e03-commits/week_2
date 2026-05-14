//demonstrate deep cloning so nested objects do not share references
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [{ product: "Laptop", price: 70000 }]
}

console.log(order)

// Create a deep clone of the order object
let deepCopy = structuredClone(order)

deepCopy.customer.address.city = 'bengaluru'
deepCopy.items[0].price = 800000
console.log(deepCopy)

