<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-11 col-md-6 col-lg-4">
        <div class="card card-wicho p-4">
          <div class="text-center mb-3">
            <img src="../assets/logo.png" alt="logo" width="200" class="floaty" />
            <h4 class="mt-3 gradient-title">WichoFit</h4>
            <p class="login-subtitle">Accede al panel de administración</p>
          </div>

          <div v-if="alert" class="alert alert-danger" role="alert">
            {{ alert }}
          </div>

          <div>
            <label class="form-label">Usuario</label>
            <input
              v-model="form.username"
              class="form-control form-control-wicho mb-2"
              placeholder="Ingresa tu usuario"
            />

            <label class="form-label">Contraseña</label>
            <input
              type="password"
              v-model="form.password"
              class="form-control form-control-wicho mb-3"
              placeholder="Ingresa tu contraseña"
            />

            <div class="d-grid">
              <button class="btn btn-primary-wicho" @click="login">
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUser } from "../services/authService.js";

export default {
  data() {
    return {
      form: { username: "", password: "" },
      alert: null,
    };
  },
  methods: {
    async login() {
      this.alert = null;

      try {
        const user = await loginUser(this.form.username, this.form.password);

        if (!user) {
          this.alert = "Usuario o contraseña incorrectos";
          return;
        }

        sessionStorage.setItem("wichofit_user", JSON.stringify(user));
        this.$router.push("/dashboard");
      } catch (error) {
        this.alert = "Error al iniciar sesión. Intenta más tarde.";
      }
    },
  },
};
</script>

<style scoped>
/* Texto bajo el logo */
.login-subtitle {
  color: #cfd3d9 !important;
  font-size: 14px;
  margin-top: -4px;
}

/* Labels */
.form-label {
  color: #e6e6e6 !important;
  font-weight: 500;
  margin-bottom: 4px;
}

/* Inputs estilo glass */
.form-control-wicho {
  background: #ffffff15;
  border: 1px solid #ffffff30;
  color: #fff !important;
  padding: 10px;
  border-radius: 10px;
}

.form-control-wicho::placeholder {
  color: #bfc3c9;
}

.form-control-wicho:focus {
  border-color: #4da3ff !important;
  background: #ffffff25;
  color: #fff;
}

.gradient-title {
  color: #fff !important;
  font-weight: 600;
  letter-spacing: 1px;
}

.card-wicho {
  background: rgba(25, 28, 34, 0.55);
  backdrop-filter: blur(20px);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}
</style>
