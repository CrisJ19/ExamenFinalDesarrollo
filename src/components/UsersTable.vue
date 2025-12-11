<template>
  <div class="container py-4">
    <h2 class="mb-3">Lista de Usuarios</h2>

    <button class="btn btn-primary mb-3" @click="openCreate">
      + Crear Usuario
    </button>

    <!-- TABLA -->
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Documento</th>
          <th>Fecha Nacimiento</th>
          <th style="width: 180px;">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="u in users" :key="u.id">
          <td>{{ u.id }}</td>
          <td>{{ u.name }}</td>
          <td>{{ u.email }}</td>
          <td>{{ u.documento }}</td>
          <td>{{ u.fechaNacimiento }}</td>

          <td>
            <button class="btn btn-warning btn-sm me-2" @click="openEdit(u)">
              Editar
            </button>

            <button class="btn btn-danger btn-sm" @click="remove(u.id)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- FORMULARIO -->
    <UserForm
      v-if="showForm"
      :editingUser="userToEdit"
      @close="showForm = false"
      @saved="loadUsers"
    />
  </div>
</template>

<script>
import { getUsers, deleteUser } from "@/services/userService.js";
import UserForm from "./UserForm.vue";

export default {
  components: { UserForm },

  data() {
    return {
      users: [],
      showForm: false,
      userToEdit: null,
    };
  },

  mounted() {
    this.loadUsers();
  },

  methods: {
    async loadUsers() {
      this.users = await getUsers();
    },

    openCreate() {
      this.userToEdit = null;
      this.showForm = true;
    },

    openEdit(user) {
      this.userToEdit = { ...user };
      this.showForm = true;
    },

    async remove(id) {
      if (confirm("¿Seguro que deseas eliminar este usuario?")) {
        await deleteUser(id);
        this.loadUsers();
      }
    },
  },
};
</script>


