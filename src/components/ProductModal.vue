<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">
            {{ product && product.id ? "Editar Producto" : "Nuevo Producto" }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">

          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input v-model="form.title" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Descripción</label>
            <textarea v-model="form.description" class="form-control"></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Precio</label>
            <input v-model="form.price" type="number" class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Imagen (URL)</label>
            <input v-model="form.image" type="text" class="form-control" />
          </div>

          <img
            v-if="form.image"
            :src="form.image"
            class="img-fluid rounded border"
            style="max-height: 150px; object-fit: cover;"
          />

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
  props: ["product"],

  data() {
    return {
      form: {
        title: "",
        description: "",
        price: "",
        image: "",
      },
      modal: null
    };
  },

  watch: {
    product(p) {
      if (p) this.form = { ...p };
      else {
        this.form = {
          title: "",
          description: "",
          price: "",
          image: "",
        };
      }
    }
  },

  mounted() {
    const modalEl = document.getElementById("productModal");
    this.modal = new Modal(modalEl);
  },

  methods: {
    show() {
      this.modal.show();
    },

    guardar() {
      this.$emit("save", this.form);
      this.modal.hide();
    }
  }
};
</script>
