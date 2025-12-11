<template>
  <div class="card p-3 mb-3">
    <h4>{{ editingUser ? "Editar Usuario" : "Crear Usuario" }}</h4>

    <form @submit.prevent="save">
      <!-- Nombre -->
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          v-model="localUser.nombre"
          required
        />
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="localUser.email"
          required
        />
      </div>

      <!-- Fecha de nacimiento -->
      <div class="mb-3">
        <label class="form-label">Fecha de nacimiento</label>
        <input
          type="date"
          class="form-control"
          v-model="localUser.fechaNacimiento"
          required
        />
      </div>

      <!-- Documento -->
      <div class="mb-3">
        <label class="form-label">Número de documento</label>
        <input
          type="text"
          class="form-control"
          v-model="localUser.documento"
          required
        />
      </div>

      <!-- Botones -->
      <button class="btn btn-success me-2" type="submit">Guardar</button>

      <button class="btn btn-secondary" type="button" @click="$emit('close')">
        Cancelar
      </button>
    </form>
  </div>
</template>

<script>
import { createUser, updateUser } from "@/services/userService.js";

export default {
  props: ["editingUser"],

  data() {
    return {
      localUser: {
        nombre: "",
        email: "",
        fechaNacimiento: "",
        documento: "",
      },
    };
  },

  mounted() {
    if (this.editingUser) {
      this.localUser = { ...this.editingUser };
    }
  },

  methods: {
    async save() {
      if (this.editingUser) {
        await updateUser(this.editingUser.id, this.localUser);
      } else {
        await createUser(this.localUser);
      }

      this.$emit("saved");
      this.$emit("close");
    },
  },
};
</script>



