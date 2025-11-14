<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h3 class="gradient-title mb-0">Productos</h3>

      <button class="btn btn-primary-wicho" @click="nuevoProducto">
        + Nuevo Producto
      </button>
    </div>

    <!-- Si está cargando -->
    <LoadingSpinner v-if="loading" />

    <!-- Lista de productos -->
    <div class="row g-3" v-else>
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="p in productos"
        :key="p.id"
      >
        <ProductCardComponent
          :product="p"
          @view="abrirProducto"
          @addToCart="añadirCarrito"
          @delete="eliminarProducto"
        />
      </div>
    </div>

    <ProductModal
      ref="modal"
      :product="productoSeleccionado"
      @save="guardarProducto"
    />
  </div>
</template>

<script>
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/api.js";

import { gymProducts } from "../data/gymProducts.js";


import ProductCardComponent from "../components/ProductCardComponent.vue";
import ProductModal from "../components/ProductModal.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  components: { ProductCardComponent, ProductModal, LoadingSpinner },

  data() {
    return {
      productos: [],
      loading: true,
      productoSeleccionado: null,
    };
  },

  async mounted() {
    await this.cargarProductos();
  },

  methods: {
    // 🔥 Cargar productos + reemplazar por WichoFit
    async cargarProductos() {
      this.loading = true;

      const raw = await getProducts();

      // 🔥 Mezcla FakeStore + WichoFit (solo apariencia)
      this.productos = raw.map((p, i) => ({
        ...p,
        title: gymProducts[i]?.title || p.title,
        description: gymProducts[i]?.description || p.description,
        image: gymProducts[i]?.image || p.image,
        category: "WichoFit Gym",
      }));

      this.loading = false;
    },

    // Abrir modal para editar
    abrirProducto(p) {
      this.productoSeleccionado = p;
      this.$refs.modal.show();
    },

    // Abrir modal para crear
    nuevoProducto() {
      this.productoSeleccionado = null;
      this.$refs.modal.show();
    },

    // Guardar nuevo o editado
    async guardarProducto(data) {
      if (this.productoSeleccionado) {
        await updateProduct(this.productoSeleccionado.id, data);
      } else {
        await createProduct(data);
      }
      await this.cargarProductos();
    },

    // Eliminar producto
    async eliminarProducto(producto) {
      if (!confirm(`¿Seguro que deseas eliminar "${producto.title}"?`)) return;

      try {
        await deleteProduct(producto.id);
      } catch (e) {
        alert("FakeStore API no elimina realmente, pero simulamos la eliminación.");
      }

      await this.cargarProductos();
    },

    añadirCarrito(p) {
      console.log("Añadido al carrito:", p);
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 20px;
}
</style>
