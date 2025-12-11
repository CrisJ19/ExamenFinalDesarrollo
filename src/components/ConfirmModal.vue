<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-box">
      <h4 class="modal-title">{{ title }}</h4>
      <p class="modal-message">{{ message }}</p>

      <div class="buttons">
        <button class="btn-cancel" @click="close">Cancelar</button>
        <button class="btn-confirm" @click="confirm">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Confirmar acción" },
    message: { type: String, default: "¿Deseas continuar?" }
  },
  emits: ["confirm", "close"],
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-box {
  background: #1e1f26;
  padding: 22px;
  border-radius: 12px;
  width: 90%;
  max-width: 340px;
  color: #fff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  animation: pop 0.2s ease-out;
}

.modal-title {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
}

.modal-message {
  font-size: 14px;
  margin-bottom: 18px;
  opacity: 0.9;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.btn-cancel,
.btn-confirm {
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 48%;
  font-weight: 600;
}

.btn-cancel {
  background: #444;
  color: white;
}

.btn-confirm {
  background: #ff4747;
  color: white;
}

@keyframes pop {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
