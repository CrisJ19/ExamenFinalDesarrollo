<template>
  <div class="d-flex">
    <SidebarComponent :visible="sidebarVisible" @report="generateReport"/>
    <div class="flex-fill d-flex flex-column min-vh-100">
      <NavbarComponent :userName="user.name" @toggle-sidebar="toggleSidebar"/>
      <main class="p-4">
        <router-view />
      </main>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import SidebarComponent from '../components/SidebarComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: { SidebarComponent, NavbarComponent, FooterComponent },
  data(){ return { sidebarVisible: true, user: { name: 'Usuario' } } },
  mounted() {
    const u = sessionStorage.getItem('wichofit_user')
    if(u) this.user = JSON.parse(u)
  },
  methods:{
    toggleSidebar(){ this.sidebarVisible = !this.sidebarVisible },
    generateReport(){ alert('Función de reporte (placeholder).') }
  }
}
</script>

<style scoped>
.min-vh-100 { min-height: 100vh; }
</style>
