<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Gestión de Usuarios</h1>

    <!-- Botón para crear -->
    <button
      class="mb-4 bg-green-600 text-white px-4 py-2 rounded"
      @click="openCreateModal">
      Crear Usuario
    </button>

    <!-- Tabla -->
    <table class="min-w-full bg-white shadow rounded-lg">
      <thead>
        <tr class="bg-gray-200 text-left">
          <th class="p-2">ID</th>
          <th class="p-2">Usuario</th>
          <th class="p-2">Nombre</th>
          <th class="p-2">Correo</th>
          <th class="p-2">Rol</th>
          <th class="p-2">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="u in users" :key="u.id" class="border-b">
          <td class="p-2">{{ u.id }}</td>
          <td class="p-2">{{ u.username }}</td>
          <td class="p-2">{{ u.nombre }}</td>
          <td class="p-2">{{ u.correo }}</td>
          <td class="p-2">{{ u.rol }}</td>
          <td class="p-2 flex gap-2">
            <button
              class="bg-blue-600 text-white px-2 py-1 rounded"
              @click="openEditModal(u)"
            >Editar</button>

            <button
              class="bg-red-600 text-white px-2 py-1 rounded"
              @click="deleteUser(u.id)"
            >Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div v-if="showModal"
         class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow w-[350px]">

        <h2 class="text-xl font-semibold mb-4">
          {{ isEditing ? "Editar Usuario" : "Crear Usuario" }}
        </h2>

        <form @submit.prevent="saveUser">

          <label>Usuario:</label>
          <input v-model="form.username" class="border w-full p-2 mb-2" />

          <label>Nombre:</label>
          <input v-model="form.nombre" class="border w-full p-2 mb-2" />

          <label>Correo:</label>
          <input v-model="form.correo" class="border w-full p-2 mb-2" />

          <label>Rol:</label>
          <select v-model="form.rol" class="border w-full p-2 mb-2">
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>

          <label>Contraseña:</label>
          <input type="password" v-model="form.password" class="border w-full p-2 mb-4" />

          <div class="flex justify-end gap-4">
            <button type="button" class="px-3 py-2 bg-gray-400 text-white rounded"
              @click="closeModal">
              Cancelar
            </button>

            <button type="submit" class="px-3 py-2 bg-blue-600 text-white rounded">
              Guardar
            </button>
          </div>

        </form>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "@/services/axiosConfig";

export default {
  data() {
    return {
      users: [],
      showModal: false,
      isEditing: false,
      form: {
        id: "",
        username: "",
        nombre: "",
        correo: "",
        rol: "",
        password: ""
      }
    };
  },

  methods: {
    async loadUsers() {
      const res = await axios.get("/users");
      this.users = res.data;
    },

    openCreateModal() {
      this.isEditing = false;
      this.form = {
        username: "",
        nombre: "",
        correo: "",
        rol: "user",
        password: ""
      };
      this.showModal = true;
    },

    openEditModal(user) {
      this.isEditing = true;
      this.form = { ...user };
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    async saveUser() {
      if (this.isEditing) {
        await axios.put(`/users/${this.form.id}`, this.form);
      } else {
        await axios.post("/users", this.form);
      }

      this.closeModal();
      this.loadUsers();
    },

    async deleteUser(id) {
      if (confirm("¿Seguro de eliminar este usuario?")) {
        await axios.delete(`/users/${id}`);
        this.loadUsers();
      }
    }
  },

  mounted() {
    this.loadUsers();
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
