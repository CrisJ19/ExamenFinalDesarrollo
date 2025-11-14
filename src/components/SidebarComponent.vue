<template>
  <aside :class="['p-3 sidebar', { show: visible }]" style="width: 250px">
    <div class="d-flex align-items-center mb-4">
      <img src="../assets/logo.png" width="90" alt="logo" />
      <div class="ms-2">
        <h6 class="mb-0">WichoFit</h6>
        <small class="text-muted">Panel</small>
      </div>
    </div>

    <ul class="nav flex-column">
      <li class="nav-item mb-2">
        <router-link to="/dashboard/productos" class="nav-link text-decoration-none text-light"
          >Productos</router-link
        >
      </li>
      <li class="nav-item mb-2">
        <router-link to="/dashboard/clientes" class="nav-link text-decoration-none text-light"
          >Clientes</router-link
        >
      </li>
      <li class="nav-item mt-4">
        <a
          class="nav-link text-decoration-none text-muted"
          href="#"
          @click.prevent="$emit('report')"
          >Generar reporte</a
        >
      </li>
    </ul>

    <div class="mt-auto pt-3">
      <small class="text-muted">© WichoFit 2025</small>
    </div>
  </aside>
</template>

<script>
export default {
  props: { visible: { type: Boolean, default: true } },
}
</script>

<style scoped>
.nav-link {
  padding: 0.45rem 0.6rem;
  border-radius: 0.45rem;
}
.nav-link:hover {
  background: rgba(255, 255, 255, 0.02);
}
</style>
