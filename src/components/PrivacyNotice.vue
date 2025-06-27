<!-- src/components/PrivacyNotice.vue -->
<template>
  <Transition name="modal">
    <div v-if="modelValue" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container privacy-modal">
          <div class="modal-header">
            <h3>Aviso de Privacidad</h3>
            <button class="close-button" @click="$emit('update:modelValue', false)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="#0d47a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <div class="privacy-content">
              <h4>Responsable del tratamiento de tus datos personales</h4>
              <p>Landing con domicilio en Localhost es responsable del tratamiento de los datos personales que nos proporciones.</p>

              <h4>Finalidad del tratamiento</h4>
              <p>Los datos personales que recabamos serán utilizados para las siguientes finalidades:</p>
              <ul>
                <li>Responder a tus consultas y solicitudes de información</li>
                <li>Prestar los servicios que nos hayas solicitado</li>
                <li>Mantenerte informado sobre nuestros productos y servicios</li>
              </ul>

              <h4>Datos personales que recabamos</h4>
              <p>Recabamos los siguientes datos personales:</p>
              <ul>
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número telefónico</li>
                <li>Cualquier otra información que nos proporciones en tu mensaje</li>
              </ul>

              <h4>Tus derechos</h4>
              <p>Tienes derecho a:</p>
              <ul>
                <li>Acceder a tus datos personales</li>
                <li>Solicitar la rectificación o cancelación de los mismos</li>
                <li>Oponerte al tratamiento de tus datos</li>
                <li>Revocar tu consentimiento</li>
              </ul>
              <p>Para ejercer estos derechos, envía un correo a spixerspi@gmail.com con el asunto "Ejercicio de derechos ARCO".</p>

              <h4>Cambios al aviso de privacidad</h4>
              <p>Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio será publicado en nuestro sitio web.</p>
            </div>
          </div>
          <div class="modal-footer">
            <button class="modal-button" @click="$emit('update:modelValue', false)">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  modelValue: Boolean
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background-color: rgba(13, 71, 161, 0.1);
}

.close-button svg {
  transition: transform 0.2s ease;
}

.close-button:hover svg {
  transform: scale(1.1);
}

.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}

.modal-container {
  width: 90%;
  max-width: 1000px;
  max-height: 80vh;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  position: relative;
  padding: 1.5rem 3rem 1rem 1.5rem;
  text-align: center;
}

.modal-header h3 {
  margin: 0;
  color: #0d47a1;
  font-size: 1.5rem;
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  text-align: left;
  flex: 1;
}

.privacy-content h4 {
  color: #000000;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.privacy-content p,
.privacy-content ul {
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #000000;
}

.privacy-content ul {
  padding-left: 1.5rem;
}

.privacy-content li {
  color: #434343;
}

.modal-footer {
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-top: 1px solid #eee;
}

.modal-button {
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.modal-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(25, 118, 210, 0.3);
}

/* Transiciones del modal */
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(-20px);
}

/* Responsive para modal */
@media (max-width: 768px) {
  .modal-container {
    width: 95%;
    max-height: 70vh;
  }
}
</style>
