<template>
  <div class="modal fade" id="productoModal" tabindex="-1" ref="modalEl">
    <div class="modal-dialog">
      <div class="modal-content card-wicho p-3">
        <div class="modal-header border-0">
          <h5 class="modal-title">
            {{ isEdit ? 'Editar producto' : 'Nuevo producto' }}
          </h5>
          <button type="button" class="btn-close" @click="hide"></button>
        </div>

        <div class="modal-body">
          <div class="mb-2">
            <label class="form-label">Título</label>
            <input v-model="form.title" class="form-control form-control-wicho" />
          </div>

          <div class="mb-2">
            <label class="form-label">Precio</label>
            <input type="number" v-model="form.price" class="form-control form-control-wicho" />
          </div>

          <div class="mb-2">
            <label class="form-label">Categoría</label>
            <input v-model="form.category" class="form-control form-control-wicho" />
          </div>

          <div class="mb-2">
            <label class="form-label">Imagen (URL)</label>
            <input v-model="form.image" class="form-control form-control-wicho" />
          </div>

          <div class="mb-2">
            <label class="form-label">Descripción</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="form-control form-control-wicho"
            ></textarea>
          </div>
        </div>

        <div class="modal-footer border-0">
          <button class="btn btn-outline-wicho" @click="hide">Cancelar</button>
          <button class="btn btn-primary-wicho" @click="save">
            {{ isEdit ? 'Actualizar' : 'Crear' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  props: { product: Object },

  data() {
    return {
      modal: null,
      form: { title: '', price: 0, category: '', image: '', description: '' },
    }
  },

  computed: {
    isEdit() {
      return !!this.product
    },
  },

  watch: {
    product: {
      immediate: true,
      handler(val) {
        if (val) this.form = { ...val }
        else
          this.form = {
            title: '',
            price: 0,
            category: '',
            image: '',
            description: '',
          }
      },
    },
  },

  mounted() {
    this.modal = new Modal(this.$refs.modalEl, { backdrop: 'static' })
  },

  methods: {
    show() {
      this.modal.show()
    },
    hide() {
      this.modal.hide()
    },
    save() {
      this.$emit('save', { ...this.form })
      this.hide()
    },
  },
}
</script>

<style scoped>
.modal-content {
  background: none;
  border: none;
}
</style>
