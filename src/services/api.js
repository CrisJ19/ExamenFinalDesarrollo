// api.js — API simulada local

import { gymProducts } from "../data/gymProducts.js";

let products = [...gymProducts];

// Obtener TODOS los productos
export async function getProducts() {
  const res = await fetch(API_URL);
  return await res.json();
}


export async function getProduct(id) {
  return Promise.resolve(products.find((p) => p.id === id));
}


export async function createProduct(product) {
  const newProduct = {
    ...product,
    id: Date.now(),
  };

  products.push(newProduct);

  return Promise.resolve(newProduct);
}


export async function updateProduct(id, updated) {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updated };
  }

  return Promise.resolve(products[index]);
}


export async function deleteProduct(id) {
  products = products.filter((p) => p.id !== id);
  return Promise.resolve({ success: true });
}
