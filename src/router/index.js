import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import UsersView from "../views/UsersView.vue";
import ProductsView from "../views/ProductView.vue";
import MainLayout from "../components/MainLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    // Todas las rutas protegidas usan el MainLayout
    path: "/",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: DashboardView,
      },
      {
        path: "usuarios",
        name: "usuarios",
        component: UsersView,
      },
      {
        path: "productos",
        name: "productos",
        component: ProductsView,
      },
    ]
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

router.beforeEach((to, from, next) => {
  const user = sessionStorage.getItem("wichofit_user");

  if (to.meta.requiresAuth && !user) return next("/login");

  if (user && to.path === "/login") return next("/dashboard");

  next();
});

export default router;
