WichoFit – Sistema Web de Gestión para Gimnasio

Aplicación web desarrollada con Vue.js 3 + Bootstrap 5.3
Segundo Parcial – Desarrollo de Aplicaciones Web

Descripción del Proyecto

WichoFit es una aplicación web modular diseñada para la gestión interna de un gimnasio.
Incluye autenticación básica, un panel de administración (Dashboard), y un módulo completo de gestión de productos utilizando una API externa.

El objetivo del proyecto es demostrar:

Uso correcto de Vue 3

Modularización con componentes, vistas, rutas

Consumo de APIs externas (FakeStore API mezclada con catálogo WichoFit)

Estilos responsivos con Bootstrap 5.3

Buenas prácticas de desarrollo

Colaboración mediante Git, ramas y Pull Requests

 Paleta de Colores – WichoFit

Usamos un estilo moderno basado en tonos energéticos de gimnasio:

#7F00FF → Morado principal

#E100FF → Rosa acento

#0D0D0D → Fondo oscuro

#FFFFFF → Texto y contraste

Integrados como clases personalizadas de Bootstrap para botones, títulos y barras laterales.

Funcionalidades Principales
 1. Login con Validación Local

Se incluye un archivo usuarios.json con usuarios de prueba.
La aplicación valida:

✔ Usuario
✔ Contraseña

Al iniciar sesión se guarda la sesión en sessionStorage.

⚠ Nota: Este login es educativo. NO representa un sistema seguro.

 2. Dashboard Modular

Incluye:

NavbarComponent

SidebarComponent

FooterComponent

Soporte para rutas hijas (/dashboard/productos, etc.)

El Dashboard se mantiene estable mientras las vistas cambian mediante <router-view>.

 3. Gestión de Productos (CRUD + API externa)

WichoFit consume la API:

https://fakestoreapi.com/products


Y fusiona los resultados con un catálogo propio (gymProducts.js) para personalizar títulos, imágenes y descripciones.

Funciones implementadas:

Acción	Método	Estado
Listar productos	GET	✔
Crear productos	POST	✔ (simulado por FakeStore)
Editar productos	PUT	✔
Eliminar productos	DELETE	❗FakeStore no borra realmente, pero se simula

Vista incluida:

Tarjetas de producto (ProductCardComponent)

Modal de edición/creación (ProductModal)

Spinner de carga (LoadingSpinner)

 4. Componentes Reutilizables
✔ NavbarComponent

Muestra el nombre del usuario logueado.

✔ SidebarComponent

Navegación lateral + estilo personalizado morado.

✔ FooterComponent

Pie de página.

✔ ProductCardComponent

Tarjeta Bootstrap con imagen, precio, descripción y botones.

✔ ProductModal

Modal con formulario para agregar/editar productos.

📁 Estructura del Proyecto
src/
│── assets/
│── components/
│     ├── NavbarComponent.vue
│     ├── SidebarComponent.vue
│     ├── FooterComponent.vue
│     ├── ProductCardComponent.vue
│     ├── ProductModal.vue
│     └── LoadingSpinner.vue
│
│── data/
│     └── gymProducts.js
│
│── services/
│     └── api.js
│
│── views/
│     ├── LoginView.vue
│     ├── DashboardView.vue
│     └── ProductView.vue
│
│── router/
│     └── index.js
│
└── App.vue

🔗 Consumo de API – Ejemplo Real
Obtener productos
export async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}
Vista de Login (LoginView)

La aplicación incluye una vista de inicio de sesión diseñada únicamente con fines educativos.
El sistema valida las credenciales del usuario leyendo un archivo local usuarios.json, sin manejar cifrado ni autenticación real.

✔ Funcionamiento

El usuario ingresa su nombre de usuario y contraseña.

El componente LoginView ejecuta una petición fetch() a usuarios.json.

Se busca un usuario que coincida con las credenciales ingresadas.

Si es correcto:

La información del usuario se almacena temporalmente en sessionStorage.

El usuario es redirigido al Dashboard.

Si las credenciales son incorrectas:

Se muestra una alerta Bootstrap usando el componente alert alert-danger.

 Ejemplo del archivo usuarios.json
[
  { "username": "admin", "password": "1234", "name": "Administrador" },
  { "username": "user", "password": "abcd", "name": "Usuario Invitado" }
]

 Código simplificado del LoginView
<div v-if="alert" class="alert alert-danger" role="alert">
  {{ alert }}
</div>
Este sistema de autenticación no representa un login real.
Solo se usa para fines educativos como parte del parcial de Desarrollo de Aplicaciones Web.
No implementa seguridad, cifrado ni protección de datos.

Fusionar con Catálogo WichoFit
this.productos = raw.map((p, i) => ({
  ...p,
  title: gymProducts[i]?.title || p.title,
  description: gymProducts[i]?.description || p.description,
  image: gymProducts[i]?.image || p.image,
  category: "WichoFit Gym",
}))

 Comunicación entre Componentes
Props
<ProductCardComponent :product="p" />

Emisión de eventos
this.$emit("delete", product)

 Trabajo Colaborativo con GitHub

El repositorio evidencia:

✔ Trabajo en ramas (rama-angel, rama-jhoan)
✔ Fusiones mediante Pull Requests
✔ Commits frecuentes
✔ Convenciones de nombres
✔ Corrección de errores en equipo (ej. conflicto de gymProducts.js)

 Usuario de Prueba (para Login)

Credenciales sugeridas:

Usuario: admin
Contraseña: 123456

 Cómo ejecutar el proyecto
npm install
npm run serve
