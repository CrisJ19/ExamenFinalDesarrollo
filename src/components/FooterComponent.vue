<template>
  <footer class="wicho-footer mt-auto py-4">
    <div class="container-fluid">
      <div class="row align-items-center">
        <!-- Columna izquierda -->
        <div class="col-md-4 text-center text-md-start mb-3 mb-md-0">
          <div class="d-flex align-items-center justify-content-center justify-content-md-start">
            <img src="../assets/logo.png" alt="WichoFit Logo" width="50" class="me-2" />
            <div>
              <h6 class="mb-0 gradient-text fw-bold">WichoFit</h6>
              <small class="text-muted">Sistema de Gestión</small>
            </div>
          </div>
        </div>

        <!-- Columna central -->
        <div class="col-md-4 text-center mb-3 mb-md-0">
          <p class="mb-0 text-muted">
            © 2025 WichoFit • Hecho con
            <i class="bi bi-heart-fill text-danger"></i>
            por el equipo
          </p>
          <small class="text-muted">
            <i class="bi bi-mortarboard me-1"></i>
            Licencia educativa
          </small>
        </div>

        <!-- Columna derecha -->
        <div class="col-md-4 text-center text-md-end">
          <div class="footer-links">
            <a href="#" class="footer-link me-3" title="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a href="#" class="footer-link me-3" title="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="footer-link" title="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <small class="text-muted d-block mt-2">
            Versión 1.0.0
          </small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
.wicho-footer {
  background: #ffffff;
  border-top: 2px solid #e9ecef;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  margin-top: 3rem;
}

.gradient-text {
  background: linear-gradient(90deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-link {
  color: #6c757d;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.footer-link:hover {
  color: var(--primary-1);
  transform: translateY(-3px);
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .footer-links {
    justify-content: flex-end;
  }
}
</style>
