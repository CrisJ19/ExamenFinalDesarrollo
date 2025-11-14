import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProductView from '../views/ProductView.vue'
import ClientsView from '../views/ClientsView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView, meta: { guest: true } },
  {
    path: '/dashboard',
    component: DashboardView,
    children: [
      { path: '', redirect: '/dashboard/productos' },
      { path: 'productos', component: ProductView },
      { path: 'clientes', component: ClientsView }
    ],
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Simple guard (stateful auth could be added later)
router.beforeEach((to, from, next) => {
  const logged = sessionStorage.getItem('wichofit_user') // set on login
  if (to.meta.requiresAuth && !logged) return next('/login')
  if (to.meta.guest && logged) return next('/dashboard')
  next()
})

export default router
