<template>
  <aside :class="['sidebar', { 'sidebar-visible': visible }]">
    <div class="sidebar-content p-3">
      <!-- Header del sidebar -->
      <div class="d-flex align-items-center mb-4 pb-3 border-bottom">
        <img src="../assets/logo.png" width="60" alt="logo" />
        <div class="ms-2">
          <h6 class="mb-0 text-white fw-bold">WichoFit</h6>
          <small class="text-muted">Panel Admin</small>
        </div>
      </div>

      <!-- Menú de navegación -->
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <router-link
            to="/dashboard"
            class="nav-link sidebar-link"
            active-class="active"
          >
            <i class="bi bi-speedometer2 me-2"></i>
            Dashboard
          </router-link>
        </li>

        <li class="nav-item mb-2">
          <router-link
            to="/usuarios"
            class="nav-link sidebar-link"
            active-class="active"
          >
            <i class="bi bi-people-fill me-2"></i>
            Usuarios
          </router-link>
        </li>

        <li class="nav-item mb-2">
          <router-link
            to="/productos"
            class="nav-link sidebar-link"
            active-class="active"
          >
            <i class="bi bi-box-seam me-2"></i>
            Productos
          </router-link>
        </li>

        <!-- Separador -->
        <li class="mt-3 mb-2">
          <hr class="text-muted" />
        </li>

        <li class="nav-item">
          <a
            class="nav-link sidebar-link text-muted"
            href="#"
            @click.prevent="$emit('report')"
          >
            <i class="bi bi-file-earmark-bar-graph me-2"></i>
            Generar reporte
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 70px; /* Altura del navbar */
  width: 250px;
  height: calc(100vh - 70px);
  background: linear-gradient(180deg, #1a1a3d 0%, #0d0d1f 100%);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
  overflow-y: auto;
}

.sidebar-visible {
  transform: translateX(0);
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-link {
  color: #b8c5d6;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
}

.sidebar-link:hover {
  background: rgba(106, 0, 255, 0.2);
  color: white;
  transform: translateX(5px);
}

.sidebar-link.active {
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  color: white;
  box-shadow: 0 2px 8px rgba(106, 0, 255, 0.4);
}

.sidebar-link i {
  font-size: 1.1rem;
}

/* Scrollbar personalizado */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(106, 0, 255, 0.5);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(106, 0, 255, 0.7);
}

/* Desktop: visible cuando se activa */
@media (min-width: 769px) {
  .sidebar-visible {
    transform: translateX(0);
  }
}
</style>
