<template>
  <section class="contact" id="contact">
    <h2 class="contact-title">Contáctanos</h2>
    <form class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <input 
          v-model="formData.nombre_completo" 
          type="text" 
          placeholder="Guillermo García Canul" 
          required 
        />
        <label>Nombre completo</label>
        <span class="focus-border"></span>
      </div>
      
      <div class="form-group">
        <input 
          v-model="formData.correo" 
          type="email" 
          placeholder="guillermo.jesus.garcia.canul@gmail.com" 
          required 
        />
        <label>Correo electrónico</label>
        <span class="focus-border"></span>
      </div>

      <div class="form-group">
        <input 
          v-model="formData.telefono" 
          type="tel" 
          placeholder="+52 999 123 4567" 
          required 
        />
        <label>Teléfono</label>
        <span class="focus-border"></span>
      </div>
      
      <div class="form-group textarea-group">
        <textarea 
          v-model="formData.mensaje" 
          placeholder="Me gustaría saber más información sobre..." 
          rows="5" 
          required
        ></textarea>
        <label>Tu mensaje</label>
        <span class="focus-border"></span>
      </div>
      
      <button type="submit" class="submit-btn" :disabled="isLoading">
        <span v-if="!isLoading">Enviar mensaje</span>
        <span v-else>Enviando...</span>
        <svg width="24" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </form>

    <!-- Modal de éxito -->
     <Transition name="modal">
      <div v-if="showSuccessModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h3>¡Envío exitoso!</h3>
            </div>
            
            <div class="modal-body">
              <div class="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p>Tus datos se han enviado correctamente.</p>
            </div>
            
            <div class="modal-footer">
              <button class="modal-button" @click="closeModal">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useReCaptcha } from 'vue-recaptcha-v3';
import axios from 'axios';

// Inicializa reCAPTCHA correctamente
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const formData = ref({
  nombre_completo: '',
  correo: '',
  telefono: '',
  mensaje: ''
});

const isLoading = ref(false);
const showSuccessModal = ref(false);

const submitForm = async () => {
  try {
    isLoading.value = true;
    showSuccessModal.value = false;
    
    // Espera a que reCAPTCHA esté cargado
    await recaptchaLoaded();
    
    // Obtener token de reCAPTCHA
    const token = await executeRecaptcha('submit');
    console.log('Token de reCAPTCHA:', token);

    // Validar campos requeridos
    if (!formData.value.nombre_completo || !formData.value.correo || !formData.value.mensaje) {
      throw new Error('Por favor completa todos los campos requeridos');
    }

    // Crear payload con los datos del formulario y el token
    const payload = {
      nombre_completo: formData.value.nombre_completo,
      correo: formData.value.correo,
      telefono: formData.value.telefono,
      mensaje: formData.value.mensaje,
      recaptchaToken: token
    };

    console.log('Datos enviados:', payload);

    // Envío al servidor
    const response = await axios.post('http://localhost:3000/formulario/createData', payload);
    
    console.log('Respuesta del servidor:', response);

    if ([200, 201].includes(response.status)) {
      console.log('Envío exitoso. Datos guardados correctamente.');
      showSuccessModal.value = true;
      formData.value = { nombre_completo: '', correo: '', telefono: '', mensaje: '' };
    } else {
      throw new Error(`El servidor respondió con un estado inesperado: ${response.status}`);
    }
    
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    alert(error.message || 'Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
  } finally {
    isLoading.value = false;
  }
};

const closeModal = () => {
  showSuccessModal.value = false;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

.contact {
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f8faff, #e6f0ff);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(13, 71, 161, 0.15);
  max-width: 800px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.contact:hover {
  box-shadow: 0 12px 35px rgba(13, 71, 161, 0.2);
}

.contact-title {
  text-align: center;
  color: #0d47a1;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  border-radius: 3px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.form-group {
  position: relative;
}

.form-group label {
  position: absolute;
  top: -0.6rem;
  left: 0.8rem;
  font-size: 0.8rem;
  color: #0d47a1;
  background: #f8faff;
  padding: 0 5px;
  z-index: 2;
  transition: all 0.2s ease;
  pointer-events: none;
}

input, textarea {
  width: 100%;
  padding: 1.2rem;
  border-radius: 8px;
  border: 2px solid #d3e0f7;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  background: transparent;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #1976d2;
  outline: none;
}

input:focus + label,
input:not(:placeholder-shown) + label,
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
  top: -0.6rem;
  left: 0.8rem;
  font-size: 0.8rem;
  color: #0d47a1;
  background: #f8faff;
}

.focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  transition: width 0.4s ease;
}

input:focus ~ .focus-border,
textarea:focus ~ .focus-border {
  width: 100%;
}

.textarea-group {
  margin-bottom: 0.5rem;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  margin: 0.5rem auto 0;
  box-shadow: 0 4px 15px rgba(25, 118, 210, 0.3);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(25, 118, 210, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn svg {
  transition: transform 0.3s ease;
}

.submit-btn:hover svg {
  transform: translateX(4px);
}

/* Estilos del modal */
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
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
}

.modal-header {
  padding: 1.5rem 1.5rem 0;
  text-align: center;
}

.modal-header h3 {
  margin: 0;
  color: #0d47a1;
  font-size: 1.5rem;
}

.modal-body {
  padding: 1.5rem;
  text-align: center;
}

.success-icon {
  margin-bottom: 1rem;
}

.modal-body p {
  margin: 0;
  color: #555;
  font-size: 1.1rem;
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

/* Media queries */
@media (max-width: 768px) {
  .contact {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }
  
  .contact-title {
    font-size: 1.7rem;
  }
  
  .form {
    gap: 1.5rem;
  }

  .modal-container {
    width: 95%;
  }
}
</style>