<template>
  <div class="users-view">
    <!-- Header con título y botón crear -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-0 page-title">
          <i class="bi bi-people-fill me-2"></i>Gestión de Usuarios
        </h2>
        <small class="text-muted">Administra los usuarios del sistema</small>
      </div>
      <button class="btn btn-primary btn-create" @click="openCreateForm">
        <i class="bi bi-plus-circle me-2"></i>Crear Usuario
      </button>
    </div>

    <!-- Alertas de éxito/error -->
    <div v-if="alert.show" :class="['alert', alert.type, 'alert-dismissible', 'fade', 'show']" role="alert">
      <i :class="['bi', alert.icon, 'me-2']"></i>
      {{ alert.message }}
      <button type="button" class="btn-close" @click="alert.show = false"></button>
    </div>

    <!-- Tabla de usuarios -->
    <UsersTable
      :users="users"
      @edit="openEditForm"
      @delete="confirmDelete"
    />

    <!-- Formulario Modal -->
    <UserForm
      v-if="showForm"
      :editingUser="editingUser"
      @close="closeForm"
      @saved="handleUserSaved"
    />

    <!-- Modal de confirmación -->
    <ConfirmModal
      v-if="showConfirm"
      title="Confirmar eliminación"
      :message="'¿Estás seguro de eliminar a ' + (userToDelete?.nombre || 'este usuario') + '?'"
      @confirm="deleteUserConfirmed"
      @close="showConfirm = false"
    />
  </div>
</template>

<script>
import { getUsers, deleteUser } from "@/services/userService.js";
import UsersTable from "@/components/UsersTable.vue";
import UserForm from "@/components/UserForm.vue";
import ConfirmModal from "@/components/ConfirmModal.vue";

export default {
  components: { UsersTable, UserForm, ConfirmModal },

  data() {
    return {
      users: [],
      showForm: false,
      editingUser: null,
      showConfirm: false,
      userToDelete: null,
      alert: {
        show: false,
        message: "",
        type: "",
        icon: ""
      }
    };
  },

  async mounted() {
    this.reloadUsers();
  },

  methods: {
    async reloadUsers() {
      try {
        this.users = await getUsers();
      } catch (error) {
        this.showAlert("Error al cargar los usuarios", "alert-danger", "bi-exclamation-triangle-fill");
      }
    },

    openCreateForm() {
      this.editingUser = null;
      this.showForm = true;
    },

    openEditForm(user) {
      this.editingUser = { ...user };
      this.showForm = true;
    },

    closeForm() {
      this.showForm = false;
      this.editingUser = null;
    },

    async handleUserSaved() {
      const message = this.editingUser
        ? "Usuario actualizado exitosamente"
        : "Usuario creado exitosamente";

      this.showAlert(message, "alert-success", "bi-check-circle-fill");
      await this.reloadUsers();
    },

    confirmDelete(user) {
      this.userToDelete = user;
      this.showConfirm = true;
    },

    async deleteUserConfirmed() {
      try {
        await deleteUser(this.userToDelete.id);
        this.showConfirm = false;
        this.userToDelete = null;
        this.showAlert("Usuario eliminado exitosamente", "alert-success", "bi-check-circle-fill");
        await this.reloadUsers();
      } catch (error) {
        this.showAlert("Error al eliminar el usuario", "alert-danger", "bi-exclamation-triangle-fill");
      }
    },

    showAlert(message, type, icon) {
      this.alert = {
        show: true,
        message,
        type,
        icon
      };

      // Auto-ocultar después de 5 segundos
      setTimeout(() => {
        this.alert.show = false;
      }, 5000);
    }
  }
};
</script>

<style scoped>
.users-view {
  width: 100%;
}

.page-title {
  color: #333;
  font-weight: 700;
}

.page-title i {
  background: linear-gradient(90deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-create {
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  border: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 8px rgba(106, 0, 255, 0.3);
  transition: all 0.3s ease;
}

.btn-create:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(106, 0, 255, 0.5);
}

.alert {
  animation: slideDown 0.3s ease-out;
  border-radius: 8px;
  border: none;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
