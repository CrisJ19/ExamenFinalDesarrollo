<template>
  <div class="container py-5">
    <h2 class="mb-4">Panel de Administración</h2>

    <div class="row">

      <!-- Administrar Usuarios -->
      <div class="col-md-6 mb-3">
        <div class="card p-4 shadow">
          <h4>Usuarios</h4>
          <p>Crear, editar y eliminar usuarios del sistema.</p>
          <button class="btn btn-primary" @click="$router.push('/usuarios')">
            Administrar Usuarios
          </button>
        </div>
      </div>

      <!-- Administrar Productos -->
      <div class="col-md-6 mb-3">
        <div class="card p-4 shadow">
          <h4>Productos</h4>
          <p>Gestionar inventario, precios y stock.</p>
          <button class="btn btn-success" @click="$router.push('/productos')">
            Administrar Productos
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

