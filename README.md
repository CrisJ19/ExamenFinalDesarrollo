
WichoFit
Sistema de Gestión de Usuarios y Productos para Gimnasio y Suplementos Deportivos

Descripción
WichoFit es una Single Page Application desarrollada con Vue.js 3 y Bootstrap 5 que permite la gestión completa de usuarios y productos para establecimientos del sector fitness y suplementos deportivos. El sistema incluye autenticación, operaciones CRUD completas, modales interactivos y un diseño totalmente responsive.
Este proyecto fue desarrollado como examen final del curso de Desarrollo de Aplicaciones Web y Sistemas Operativos.

Características Principales
Autenticación

Sistema de login con validación de credenciales contra API
Protección de rutas mediante Vue Router navigation guards
Gestión de sesión con sessionStorage
Funcionalidad de cierre de sesión

Gestión de Usuarios

Listado completo de usuarios en tabla responsive
Creación de usuarios mediante modal con formulario
Edición de información de usuarios existentes
Eliminación de usuarios con modal de confirmación
Sistema de alertas para operaciones exitosas y errores

Gestión de Productos

Visualización de productos en grid de tarjetas
Creación de productos con formulario completo
Edición de productos existentes
Eliminación de productos con confirmación
Feedback visual mediante alertas de Bootstrap

Interfaz de Usuario

Diseño moderno y profesional con Bootstrap 5
Totalmente responsive
Iconografía mediante Bootstrap Icons
Componentes modales reutilizables
Navbar con menú desplegable de usuario
Sidebar de navegación lateral
Footer informativo


Tecnologías Utilizadas
Frontend Framework

Vue.js 3
Vue Router 4
Bootstrap 5
Bootstrap Icons
Axios

Backend

MockAPI

Herramientas de Desarrollo

Vite
Git y GitHub
Node.js y npm


Estructura del Proyecto
WichoFit/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── router/
│   ├── services/
│   ├── styles/
│   ├── App.vue
│   └── main.js
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

Instalación y Configuración
Requisitos Previos

Node.js versión 16.0 o superior
npm versión 7.0 o superior
Git

Pasos de Instalación

Clonar el repositorio

git clone https://github.com/usuario/wichofit.git
cd wichofit

Instalar dependencias

npm install

Configurar endpoints de API
Actualizar las URLs de MockAPI en los archivos de servicios ubicados en src/services/
Ejecutar en modo desarrollo

npm run dev
La aplicación estará disponible en http://localhost:5173

Compilar para producción

npm run build

Credenciales de Acceso
Usuario: admin
Contraseña: 1234

Scripts Disponibles

npm run dev: Inicia el servidor de desarrollo
npm run build: Compila la aplicación para producción
npm run preview: Previsualiza el build de producción


Dependencias del Proyecto
Producción

vue 3.4.0
vue-router 4.2.5
axios 1.6.2
bootstrap 5.3.2
bootstrap-icons 1.11.2

Desarrollo

vitejs/plugin-vue 5.0.0
vite 5.0.0


Arquitectura de la Aplicación
Patrón de Diseño

Single Page Application
Component-Based Architecture
Separation of Concerns

Gestión de Estado

Estado local mediante Vue Composition API
SessionStorage para persistencia de autenticación
Props y Events para comunicación entre componentes


API Endpoints
Usuarios

GET /users - Obtener todos los usuarios
POST /users - Crear nuevo usuario
PUT /users/:id - Actualizar usuario
DELETE /users/:id - Eliminar usuario

Productos

GET /products - Obtener todos los productos
POST /products - Crear nuevo producto
PUT /products/:id - Actualizar producto
DELETE /products/:id - Eliminar producto


Funcionalidades Implementadas
Sistema de Autenticación

Login con validación
Protección de rutas
Persistencia de sesión
Logout funcional

Módulo de Usuarios

Listado en tabla responsive
Creación mediante modal
Edición con pre-carga de datos
Eliminación con confirmación
Alertas de éxito y error

Módulo de Productos

Visualización en grid
Creación mediante modal
Edición con pre-carga de datos
Eliminación con confirmación
Sistema de alertas


Autores
Crhistian Angarita 192414
Angel Sánchez 192411

