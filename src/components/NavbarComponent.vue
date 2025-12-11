<template>
  <nav class="navbar navbar-expand-lg wicho-navbar px-3">
    <div class="container-fluid">
      <!-- Logo + Nombre -->
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" alt="logo" width="110" />
        <h5 class="ms-3 mb-0 gradient-title">WichoFit</h5>
      </div>

      <!-- Botones -->
      <div class="d-flex align-items-center gap-2">
        <!-- Botón de menú (solo si está autenticado) -->
        <button
          v-if="!showLogin"
          class="btn btn-sm btn-outline-wicho me-2"
          @click="$emit('toggle-sidebar')"
        >
          <i class="bi bi-list"></i> Menu
        </button>

        <!-- Botón Iniciar Sesión (solo si NO está autenticado) -->
        <button
          v-if="showLogin"
          class="btn btn-sm btn-login"
          @click="goToLogin"
        >
          <i class="bi bi-box-arrow-in-right me-1"></i>
          Iniciar Sesión
        </button>

        <!-- Dropdown Usuario (solo si está autenticado) -->
        <div v-else class="dropdown position-relative">
          <button
            id="userDropdown"
            class="btn btn-sm btn-primary-wicho"
            @click="showDropdown = !showDropdown"
          >
            <i class="bi bi-person-circle me-1"></i>
            {{ userDisplay }}
            <i class="bi bi-chevron-down ms-1"></i>
          </button>

          <ul v-if="showDropdown" class="dropdown-menu dropdown-menu-end show">
            <li>
              <button class="dropdown-item" @click="logout">
                <i class="bi bi-box-arrow-right me-2"></i>
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
  props: {
    showLogin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      user: null,
      showDropdown: false
    };
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

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', this.handleClickOutside);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },

  methods: {
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        this.showDropdown = false;
      }
    },

    goToLogin() {
      this.$router.push('/login');
    },

    logout() {
      sessionStorage.removeItem("wichofit_user");
      localStorage.removeItem("wichofit_user");
      this.showDropdown = false;
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.wicho-navbar {
  background: linear-gradient(135deg, #1a1a3d 0%, #2d2d5f 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.gradient-title {
  background: linear-gradient(90deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.btn-outline-wicho {
  color: #e6eef8;
  border: 1px solid #e6eef8;
  transition: all 0.3s ease;
}

.btn-outline-wicho:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.btn-login {
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(106, 0, 255, 0.3);
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(106, 0, 255, 0.5);
}

.btn-primary-wicho {
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  border: none;
  color: white;
  font-weight: 600;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: white;
  min-width: 200px;
  padding: 0.5rem 0;
  list-style: none;
  z-index: 1000;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-item:hover {
  background: rgba(106, 0, 255, 0.1);
}
</style>
