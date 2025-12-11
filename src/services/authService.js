

const BASE_URL = "https://6933ba294090fe3bf01dd856.mockapi.io";

export async function loginUser(username, password) {
  try {
    const res = await fetch(`${BASE_URL}/usuarios`);
    const users = await res.json();

    return users.find(
      (u) => u.username === username && u.password === password
    );
  } catch (err) {
    console.error("Error en login:", err);
    throw err;
  }
}
