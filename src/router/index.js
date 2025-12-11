import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import UsersView from "../views/UsersView.vue";
import ProductsView from "../views/ProductView.vue"; // ← NOMBRE CORREGIDO

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: UsersView,
    meta: { requiresAuth: true },
  },
  {
    path: "/productos",
    name: "productos",
    component: ProductsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login",
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔐 Middleware de autenticación
router.beforeEach((to, from, next) => {
  const user = sessionStorage.getItem("wichofit_user");

  // Rutas protegidas
  if (to.meta.requiresAuth && !user) return next("/login");

  // Si ya está logeado y entra a login → dashboard
  if (user && to.path === "/login") return next("/dashboard");

  next();
});

export default router;
