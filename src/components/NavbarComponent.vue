<template>
  <nav class="navbar navbar-expand-lg wicho-navbar px-3">
    <div class="container-fluid">
      <!-- Logo + Nombre -->
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" alt="logo" width="110" />
        <h5 class="ms-3 mb-0 gradient-title">WichoFit</h5>
      </div>

      <!-- Botones -->
      <div class="d-flex align-items-center">
        <button class="btn btn-sm btn-outline-wicho me-3" @click="$emit('toggle-sidebar')">
          <i class="bi bi-list"></i> Menu
        </button>

        <!-- Dropdown Usuario -->
        <div class="dropdown">
          <button
            id="userDropdown"
            class="btn btn-sm btn-primary-wicho dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Hola, {{ userDisplay }}
          </button>

          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <button class="dropdown-item" @click="logout">
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { user: null };
  },
  computed: {
    userDisplay() {
      if (!this.user) return "Usuario";
      return this.user.nombre || this.user.name || this.user.username || "Usuario";
    },
  },
  mounted() {
    const raw = sessionStorage.getItem("wichofit_user");
    this.user = raw ? JSON.parse(raw) : null;

    // 🔥 Forzar Bootstrap dropdown en Vue
    const dropdownTrigger = document.querySelector("#userDropdown");
    if (dropdownTrigger) {
      new bootstrap.Dropdown(dropdownTrigger);
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem("wichofit_user");
      localStorage.removeItem("wichofit_user");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.btn-outline-wicho {
  color: #e6eef8;
}
</style>
