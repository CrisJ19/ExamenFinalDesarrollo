<template>
  <div class="container py-4">

   

    <UsersTable
      :users="users"
      @edit="openEditForm"
      @delete="confirmDelete"
    />

    <UserForm
      v-if="showForm"
      :editingUser="editingUser"
      @close="closeForm"
      @saved="reloadUsers"
    />

    <ConfirmModal
      v-if="showConfirm"
      :message="'¿Seguro que deseas eliminar a ' + (userToDelete?.nombre || '') + '?'"
      @confirm="deleteUserConfirmed"
      @cancel="showConfirm = false"
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
    };
  },

  async mounted() {
    this.reloadUsers();
  },

  methods: {
    async reloadUsers() {
      this.users = await getUsers();
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
    },

    confirmDelete(user) {
      this.userToDelete = user;
      this.showConfirm = true;
    },

    async deleteUserConfirmed() {
      await deleteUser(this.userToDelete.id);
      this.showConfirm = false;
      this.reloadUsers();
    },
  },
};
</script>
