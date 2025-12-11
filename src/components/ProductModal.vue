<template>
  <div class="modal fade" tabindex="-1" ref="modalRef">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">
            {{ isEdit ? "Editar Producto" : "Nuevo Producto" }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">

          <form>
            <!-- Título -->
            <div class="mb-3">
              <label class="form-label">Título:</label>
              <input v-model="form.title" type="text" class="form-control" />
            </div>

            <!-- Descripción -->
            <div class="mb-3">
              <label class="form-label">Descripción:</label>
              <textarea v-model="form.description" class="form-control" rows="3"></textarea>
            </div>

            <!-- Precio -->
            <div class="mb-3">
              <label class="form-label">Precio:</label>
              <input v-model.number="form.price" type="number" class="form-control" />
            </div>

            <!-- Categoría -->
            <div class="mb-3">
              <label class="form-label">Categoría:</label>
              <input v-model="form.category" type="text" class="form-control" />
            </div>

            <!-- Imagen -->
            <div class="mb-3">
              <label class="form-label">URL Imagen:</label>
              <input v-model="form.image" type="text" class="form-control" />
            </div>

            <!-- Stock -->
            <div class="mb-3">
              <label class="form-label">Stock:</label>
              <input v-model.number="form.stock" type="number" class="form-control" />
            </div>

            <!-- Estado -->
            <div class="mb-3">
              <label class="form-label">Estado:</label>
              <select v-model="form.status" class="form-select">
                <option value="Disponible">Disponible</option>
                <option value="Agotado">Agotado</option>
              </select>
            </div>

          </form>

        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button class="btn btn-primary" @click="guardar">Guardar</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  props: {
    product: { type: Object, default: null }
  },

  data() {
    return {
      modal: null,

      form: {
        title: "",
        description: "",
        price: 0,
        category: "",
        image: "",
        stock: 0,
        status: "Disponible",
      },
    };
  },

  computed: {
    isEdit() {
      return !!this.product;
    },
  },

  watch: {
    product: {
      immediate: true,
      handler(val) {
        if (val) {
          this.form = {
            title: val.title ?? "",
            description: val.description ?? "",
            price: val.price ?? 0,
            category: val.category ?? "",
            image: val.image ?? "",
            stock: val.stock ?? 0,
            status: val.status ?? "Disponible",
          };
        } else {
          this.form = {
            title: "",
            description: "",
            price: 0,
            category: "",
            image: "",
            stock: 0,
            status: "Disponible",
          };
        }
      },
    },
  },

  mounted() {
    this.modal = new Modal(this.$refs.modalRef);
  },

  methods: {
    show() {
      this.modal.show();
    },

    hide() {
      this.modal.hide();
    },

    guardar() {
      if (!this.form.title || !this.form.price) {
        alert("El título y el precio son obligatorios");
        return;
      }

      this.$emit("save", { ...this.form });
      this.hide();
    },
  },
};
</script>

<style scoped>
.modal-content {
  border-radius: 12px;
}
</style>

