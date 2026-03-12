// product.js
export const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10 },
  { id: 2, name: "Phone", price: 30000, stock: 15 },
  { id: 3, name: "Headphones", price: 2000, stock: 20 }
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getAllProducts() {
  return products;
}