# wichofit

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# WichoFit - Aplicación Web (Parcial)

WichoFit es una aplicación demo para el segundo parcial de Desarrollo de Aplicaciones Web. Implementada con **Vue 3**, **Vite** y **Bootstrap 5.3**. El objetivo es demostrar modularización, componentización y consumo de API externa.

## Estructura principal
- `src/components` — componentes reutilizables (Navbar, Sidebar, Footer, ProductCard, Modals)
- `src/views` — vistas (Login, Dashboard, Productos, Clientes)
- `src/router` — ruteo con `vue-router`
- `src/services/api.js` — cliente para FakeStore API (GET/POST/PUT/DELETE)
- `public/usuarios.json` — usuarios de ejemplo para Login (solo educativo)

## Instrucciones de instalación
1. `npm install`
2. `npm run dev` — servidor de desarrollo (http://localhost:5173)

## Validación de Login
- Usuarios de ejemplo en `/public/usuarios.json`. Este método es solo educativo y **no** es una autenticación real.

## Gestión de productos
- La vista Productos usa FakeStore API para listar y simular creación/edición/eliminación.
- Endpoints usados: `https://fakestoreapi.com/products`

## Comunicación entre componentes
- `ProductCardComponent` envía eventos `view` y `addToCart` hacia la vista padre.
- `ProductModal` emite `save` con el payload del producto para crear/actualizar.

## Evidencia de trabajo colaborativo
- (Aquí pon los enlaces a commits, ramas y PRs una vez subas el repo)

## Paleta y diseño
- Paleta principal: degradado cyan → azul (`--primary-1` → `--primary-2`), acento morado.
- Uso de animaciones sutiles y tarjetas con elevación para apariencia profesional.


