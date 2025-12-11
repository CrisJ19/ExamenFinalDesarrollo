<template>
  <div class="productos-view">

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="mb-0 page-title">
          <i class="bi bi-box-seam-fill me-2"></i>Productos
        </h2>
        <small class="text-muted">Gestiona tu inventario de productos</small>
      </div>
      <button class="btn btn-primary btn-nuevo" @click="nuevoProducto">
        <i class="bi bi-plus-circle me-2"></i>
        Nuevo Producto
      </button>
    </div>

    <!-- Alertas de éxito/error -->
    <div v-if="alert.show" :class="['alert', alert.type, 'alert-dismissible', 'fade', 'show']" role="alert">
      <i :class="['bi', alert.icon, 'me-2']"></i>
      {{ alert.message }}
      <button type="button" class="btn-close" @click="alert.show = false"></button>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="p in productos" :key="p.id">
        <div class="card shadow-sm product-card">

          <img
            :src="p.image || '/no_image.png'"
            class="card-img-top"
            style="height: 200px; object-fit: cover;"
            alt="Imagen del producto"
          />

          <div class="card-body">
            <h5 class="card-title">{{ p.title }}</h5>

            <p class="card-text text-muted">
              {{ p.description }}
            </p>

            <p class="product-price">
              <strong>${{ p.price }}</strong>
            </p>

            <div class="action-buttons-product">
              <button
                class="btn btn-warning btn-action-product"
                @click="editarProducto(p)"
              >
                <i class="bi bi-pencil-fill me-1"></i>
                Editar
              </button>
              <button
                class="btn btn-danger btn-action-product"
                @click="confirmDelete(p)"
              >
                <i class="bi bi-trash-fill me-1"></i>
                Eliminar
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>

    <!-- Modal de Producto -->
    <ProductModal
      ref="productoModal"
      :product="productoEdit"
      @save="guardarProducto"
    />

    <!-- Modal de Confirmación -->
    <ConfirmModal
      v-if="showConfirm"
      title="Confirmar eliminación"
      :message="'¿Estás seguro de eliminar ' + (productoToDelete?.title || 'este producto') + '?'"
      @confirm="deleteProductConfirmed"
      @close="showConfirm = false"
    />

  </div>
</template>

<script>
import ProductModal from "../components/ProductModal.vue";
import ConfirmModal from "../components/ConfirmModal.vue";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productsService.js";

export default {
  components: {
    ProductModal,
    ConfirmModal
  },

  data() {
    return {
      productos: [],
      productoEdit: null,
      showConfirm: false,
      productoToDelete: null,
      alert: {
        show: false,
        message: "",
        type: "",
        icon: ""
      }
    };
  },

  async mounted() {
    this.cargarProductos();
  },

  methods: {
    async cargarProductos() {
      try {
        this.productos = await getProducts();
      } catch (error) {
        this.showAlert("Error al cargar los productos", "alert-danger", "bi-exclamation-triangle-fill");
      }
    },

    nuevoProducto() {
      this.productoEdit = null;
      this.$refs.productoModal.show();
    },

    editarProducto(prod) {
      this.productoEdit = { ...prod };
      this.$refs.productoModal.show();
    },

    confirmDelete(producto) {
      this.productoToDelete = producto;
      this.showConfirm = true;
    },

    async deleteProductConfirmed() {
      try {
        await deleteProduct(this.productoToDelete.id);
        this.showConfirm = false;
        this.productoToDelete = null;
        this.showAlert("Producto eliminado exitosamente", "alert-success", "bi-check-circle-fill");
        await this.cargarProductos();
      } catch (error) {
        this.showAlert("Error al eliminar el producto", "alert-danger", "bi-exclamation-triangle-fill");
      }
    },

    async guardarProducto(data) {
      try {
        const cleanProduct = {
          title: data.title,
          description: data.description,
          price: data.price,
          category: data.category,
          image: data.image,
          stock: data.stock,
          status: data.status,
        };

        if (this.productoEdit) {
          await updateProduct(this.productoEdit.id, cleanProduct);
          this.showAlert("Producto actualizado exitosamente", "alert-success", "bi-check-circle-fill");
        } else {
          await createProduct(cleanProduct);
          this.showAlert("Producto creado exitosamente", "alert-success", "bi-check-circle-fill");
        }

        await this.cargarProductos();
      } catch (error) {
        this.showAlert("Error al guardar el producto", "alert-danger", "bi-exclamation-triangle-fill");
      }
    },

    showAlert(message, type, icon) {
      this.alert = {
        show: true,
        message,
        type,
        icon
      };

      // Auto-ocultar después de 5 segundos
      setTimeout(() => {
        this.alert.show = false;
      }, 5000);
    }
  },
};
</script>

<style scoped>
.productos-view {
  width: 100%;
}

.page-title {
  color: #333;
  font-weight: 700;
}

.page-title i {
  background: linear-gradient(90deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.product-card {
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  overflow: hidden;
  background: white;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(106, 0, 255, 0.15) !important;
  border-color: var(--primary-1);
}

.card-img-top {
  border-bottom: 2px solid #f0f0f0;
}

.card-title {
  background: linear-gradient(90deg, var(--primary-1), var(--primary-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.product-price {
  font-size: 1.5rem;
  color: var(--primary-1);
  margin: 1rem 0;
}

.action-buttons-product {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: 1rem;
}

.btn-action-product {
  flex: 1;
  padding: 0.6rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.btn-action-product i {
  font-size: 1rem;
}

.btn-warning.btn-action-product {
  background: linear-gradient(135deg, #ffc107, #ff9800);
  border: none;
  color: white;
  box-shadow: 0 2px 4px rgba(255, 193, 7, 0.3);
}

.btn-warning.btn-action-product:hover {
  background: linear-gradient(135deg, #ffb300, #ff8f00);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 193, 7, 0.5);
}

.btn-danger.btn-action-product {
  background: linear-gradient(135deg, #dc3545, #c82333);
  border: none;
  color: white;
  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.3);
}

.btn-danger.btn-action-product:hover {
  background: linear-gradient(135deg, #c82333, #bd2130);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.5);
}

.btn-nuevo {
  background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
  border: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 8px rgba(106, 0, 255, 0.3);
  transition: all 0.3s ease;
}

.btn-nuevo:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(106, 0, 255, 0.5);
}

/* Animación de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card {
  animation: fadeInUp 0.5s ease;
}

.alert {
  animation: slideDown 0.3s ease-out;
  border-radius: 8px;
  border: none;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
