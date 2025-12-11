<template>
  <div class="main-layout">
    <!-- Navbar -->
    <NavbarComponent
      @toggle-sidebar="sidebarVisible = !sidebarVisible"
      :show-login="!isAuthenticated"
    />

    <!-- Sidebar + Contenido -->
    <div class="layout-container">
      <!-- Sidebar desplegable -->
      <SidebarComponent
        :visible="sidebarVisible"
        @report="generateReport"
      />

      <!-- Overlay para cerrar sidebar en móvil -->
      <div
        v-if="sidebarVisible && isMobile"
        class="sidebar-overlay"
        @click="sidebarVisible = false"
      ></div>

      <!-- Contenido principal -->
      <main :class="['main-content', { 'sidebar-open': sidebarVisible && !isMobile }]">
        <div class="content-wrapper">
          <router-view />
        </div>
        <FooterComponent />
      </main>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  },

  data() {
    return {
      sidebarVisible: false,
      isAuthenticated: false,
      isMobile: window.innerWidth <= 768
    };
  },

  mounted() {
    this.checkAuth();
    window.addEventListener('resize', this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    checkAuth() {
      const user = sessionStorage.getItem('wichofit_user');
      this.isAuthenticated = !!user;
    },

    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },

    generateReport() {
      alert('Función de generar reporte - Por implementar');
    }
  }
};
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
}

.layout-container {
  display: flex;
  flex: 1;
  position: relative;
  overflow: hidden;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  transition: margin-left 0.3s ease;
  margin-left: 0;
}

.main-content.sidebar-open {
  margin-left: 250px;
}

.content-wrapper {
  flex: 1;
  padding: 2rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.sidebar-overlay {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0 !important;
  }

  .content-wrapper {
    padding: 1rem;
  }
}
</style>
