<template>
  <div class="container mt-4">

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Productos</h2>
      <button class="btn btn-primary" @click="nuevoProducto">
        Nuevo Producto
      </button>
    </div>

    <div class="row">
      <div
        class="col-md-4 mb-3"
        v-for="p in productos"
        :key="p.id"
      >
        <div class="card shadow-sm">

          <!-- Imagen del producto -->
          <img
            :src="p.image || 'https://via.placeholder.com/300x200?text=Sin+Imagen'"
            class="card-img-top"
            style="height: 200px; object-fit: cover;"
          />

          <div class="card-body">
            <h5 class="card-title">{{ p.title }}</h5>

            <p class="card-text">
              {{ p.description }}
            </p>

            <p><strong>${{ p.price }}</strong></p>

            <div class="d-flex justify-content-between">
              <button
                class="btn btn-warning btn-sm"
                @click="editarProducto(p)"
              >
                Editar
              </button>

              <button
                class="btn btn-danger btn-sm"
                @click="eliminarProducto(p.id)"
              >
                Eliminar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal -->
    <ProductModal
      ref="productoModal"
      :product="productoEdit"
      @save="guardarProducto"
    />

  </div>
</template>

<script>
import ProductModal from "../components/ProductModal.vue";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productsService.js";

export default {
  components: { ProductModal },

  data() {
    return {
      productos: [],
      productoEdit: null,
    };
  },

  async mounted() {
    this.cargarProductos();
  },

  methods: {
    async cargarProductos() {
      try {
        this.productos = await getProducts();
      } catch (e) {
        console.error("Error cargando productos:", e);
      }
    },

    nuevoProducto() {
      this.productoEdit = null;
      this.$refs.productoModal.show();
    },

    editarProducto(prod) {
      this.productoEdit = { ...prod }; // evitar modificar reactivo original
      this.$refs.productoModal.show();
    },

    async eliminarProducto(id) {
      if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

      await deleteProduct(id);
      this.cargarProductos();
    },

    async guardarProducto(data) {
      const cleanProduct = {
        title: data.title,
        description: data.description,
        price: Number(data.price),
        category: data.category,
        image: data.image,
        stock: Number(data.stock),
        status: data.status,
      };

      if (this.productoEdit) {
        await updateProduct(this.productoEdit.id, cleanProduct);
      } else {
        await createProduct(cleanProduct);
      }

      this.cargarProductos();
    },
  },
};
</script>
