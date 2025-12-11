<template>
  <div class="card card-wicho p-3 h-100 d-flex flex-column">

    <img
      :src="validImage"
      class="product-image mx-auto"
      :alt="product?.title || 'Producto'"
      @error="imageError"
    />

    <div class="mt-3 d-flex flex-column flex-fill">
      <h6 class="mb-1">{{ shortTitle }}</h6>
      <p class="mb-2 text-muted small text-capitalize">{{ product.category }}</p>

      <div class="d-flex justify-content-between align-items-center mt-auto">
        <strong class="h6">$ {{ product.price }}</strong>

        <div class="btn-group">
          <button class="btn btn-sm btn-outline-wicho" @click="$emit('view', product)">Ver</button>

          <button class="btn btn-sm btn-primary-wicho" @click="$emit('addToCart', product)">
            Añadir
          </button>

          <button class="btn btn-sm btn-danger" @click="$emit('delete', product)">Eliminar</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['product'],

  data() {
    return {
      fallbackImage: '/no_image.png',
      validImage: this.product?.imagen || '/no_image.png',
    }
  },

  computed: {
    shortTitle() {
      if (!this.product?.title) return ""
      return this.product.title.length > 40
        ? this.product.title.slice(0, 37) + "..."
        : this.product.title
    }
  },

  methods: {
    imageError() {
      this.validImage = this.fallbackImage
    }
  }
}
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 180px;
  object-fit: contain;
}
</style>

