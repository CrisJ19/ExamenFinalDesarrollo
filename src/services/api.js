const API_URL = 'https://fakestoreapi.com'

// Obtener TODOS los productos
export async function getProducts() {
  const res = await fetch(`${API_URL}/products`)
  return await res.json()
}

// Obtener UN producto por ID
export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`)
  return await res.json()
}

// Crear un producto
export async function createProduct(product) {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' },
  })
  return await res.json()
}

// Actualizar un producto
export async function updateProduct(id, product) {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' },
  })
  return await res.json()
}

// Eliminar un producto
export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  })
  return await res.json()
}
