<template>
  <div class="dashboard-view">
    <div class="mb-4">
      <h2 class="mb-1 page-title">
        <i class="bi bi-speedometer2 me-2"></i>Panel de Administración
      </h2>
      <small class="text-muted">Acceso rápido a las funciones principales</small>
    </div>

    <div class="row">
      <!-- Administrar Usuarios -->
      <div class="col-md-6 mb-4">
        <div class="card dashboard-card shadow-sm">
          <div class="card-body p-4">
            <div class="card-icon mb-3">
              <i class="bi bi-people-fill"></i>
            </div>
            <h4 class="card-title-dash">Usuarios</h4>
            <p class="text-muted mb-4">Crear, editar y eliminar usuarios del sistema.</p>
            <button class="btn btn-primary btn-dashboard" @click="$router.push('/usuarios')">
              <i class="bi bi-arrow-right-circle me-2"></i>
              Administrar Usuarios
            </button>
          </div>
        </div>
      </div>

      <!-- Administrar Productos -->
      <div class="col-md-6 mb-4">
        <div class="card dashboard-card shadow-sm">
          <div class="card-body p-4">
            <div class="card-icon mb-3">
              <i class="bi bi-box-seam-fill"></i>
            </div>
            <h4 class="card-title-dash">Productos</h4>
            <p class="text-muted mb-4">Gestionar inventario, precios y stock.</p>
            <button class="btn btn-success btn-dashboard" @click="$router.push('/productos')">
              <i class="bi bi-arrow-right-circle me-2"></i>
              Administrar Productos
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards (opcional) -->
    <div class="row mt-4">
      <div class="col-md-4 mb-3">
        <div class="stats-card">
          <div class="stats-icon">
            <i class="bi bi-people"></i>
          </div>
          <div class="stats-content">
            <h3 class="stats-number">--</h3>
            <p class="stats-label">Total Usuarios</p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-3">
        <div class="stats-card">
          <div class="stats-icon">
            <i class="bi bi-box-seam"></i>
          </div>
          <div class="stats-content">
            <h3 class="stats-number">--</h3>
            <p class="stats-label">Total Productos</p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-3">
        <div class="stats-card">
          <div class="stats-icon">
            <i class="bi bi-graph-up"></i>
          </div>
          <div class="stats-content">
            <h3 class="stats-number">--</h3>
            <p class="stats-label">Ventas del Mes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView'
};
</script>

<style scoped>
.dashboard-view {
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

.dashboard-card {
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  height: 100%;
  background: white;
}

.dashboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(106, 0, 255, 0.15) !important;
  border-color: var(--primary-1);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 4px 12px rgba(106, 0, 255, 0.3);
}

.card-title-dash {
  background: linear-gradient(90deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.btn-dashboard {
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-dashboard:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary.btn-dashboard {
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  border: none;
}

.btn-success.btn-dashboard {
  background: linear-gradient(135deg, #28a745, #20c997);
  border: none;
}

/* Stats Cards */
.stats-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.stats-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.stats-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(106, 0, 255, 0.1), rgba(0, 195, 255, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary-1);
}

.stats-content {
  flex: 1;
}

.stats-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.stats-label {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0;
}

/* Animación de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dashboard-card,
.stats-card {
  animation: fadeInUp 0.5s ease;
}
</style>
