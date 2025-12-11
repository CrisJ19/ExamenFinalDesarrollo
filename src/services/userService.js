// src/services/userService.js

import axios from "axios";

const API_URL = "https://6933ba294090fe3bf01dd856.mockapi.io/usuarios";

export async function getUsers() {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function getUser(id) {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
}

export async function createUser(user) {
  const res = await axios.post(API_URL, user);
  return res.data;
}

export async function updateUser(id, user) {
  const res = await axios.put(`${API_URL}/${id}`, user);
  return res.data;
}

export async function deleteUser(id) {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
}
