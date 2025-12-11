const API_URL = "https://6933ba294090fe3bf01dd856.mockapi.io/productos";

// Obtener todos los productos
export async function getProducts() {
  const res = await fetch(API_URL);
  return await res.json();
}

// Obtener un producto
export async function getProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

// Crear producto
export async function createProduct(product) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return await res.json();
}

// Editar producto
export async function updateProduct(id, updated) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated),
  });
  return await res.json();
}

// Eliminar producto
export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return await res.json();
}

