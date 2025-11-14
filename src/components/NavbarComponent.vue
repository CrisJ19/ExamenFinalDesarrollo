<template>
  <nav class="navbar navbar-expand-lg wicho-navbar px-3">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" alt="logo" width="110" />
        <h5 class="ms-3 mb-0 gradient-title">WichoFit</h5>
      </div>
      <div class="d-flex align-items-center">
        <button class="btn btn-sm btn-outline-wicho me-3" @click="$emit('toggle-sidebar')">
          <i class="bi bi-list"></i> Menu
        </button>
        <div class="dropdown">
          <a
            class="btn btn-sm btn-primary-wicho dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Hola, {{ userName }}
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#" @click="logout">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: { userName: { type: String, default: 'Usuario' } },
  methods: {
    logout() {
      sessionStorage.removeItem('wichofit_user')
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.btn-outline-wicho {
  color: #e6eef8;
}
</style>
