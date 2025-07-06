<template>
  <section class="contact" id="contact">
    <h2 class="contact-title">Contáctanos</h2>
    <Form @submit="submitForm"
    :validation-schema="schema" 
    v-slot="{ errors, meta }" 
    class="form">

      <div class="form-group">
        <Field
          name="nombre_completo"
          type="text"
          placeholder="Guillermo García Canul"
          as="input"
          class="input-field"
          validate-on-blur
        />
        <label>Nombre completo</label>
        <span class="focus-border"></span>
        <ErrorMessage name="nombre_completo" class="error-message" />
      </div>
      
      <div class="form-group">
        <Field
          name="correo"
          type="email"
          placeholder="guillermo.jesus.garcia.canul@gmail.com"
          as="input"
          class="input-field"
          validate-on-blur

        />
        <label>Correo electrónico</label>
        <span class="focus-border"></span>
        <ErrorMessage name="correo" class="error-message" />
      </div>
      
      <div class="form-group">
        <Field
          name="telefono"
          type="tel"
          placeholder="+52 999 123 4567"
          as="input"
          class="input-field"
          validate-on-blur

        />
        <label>Teléfono</label>
        <span class="focus-border"></span>
        <ErrorMessage name="telefono" class="error-message" />
      </div>
      
      <div class="form-group textarea-group">
        <Field
          name="mensaje"
          placeholder="Me gustaría saber más información sobre..."
          as="textarea"
          rows="5"
          class="textarea-field"
          validate-on-blur
        />
        <label>Tu mensaje</label>
        <span class="focus-border"></span>
        <ErrorMessage name="mensaje" class="error-message" />
      </div>
      
      <div class="privacy-checkbox">
        <Field
          type="checkbox"
          name="privacyAccepted"
          id="privacy-check"
          v-model="privacyAccepted"
          as="input"
          validate-on-blur

        />
        <label for="privacy-check">
          He leído y acepto el 
          <a href="#" @click.prevent="showPrivacyModal = true">Aviso de Privacidad</a>
        </label>
        <ErrorMessage name="privacyAccepted" class="error-message" />
      </div>
      
      <button type="submit" class="submit-btn" :disabled="!meta.valid || isLoading">
        <span v-if="!isLoading">Enviar mensaje</span>
        <span v-else>Enviando...</span>
        <svg width="24" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </Form>

    <!-- Aquí sigue igual el modal de éxito y PrivacyNotice -->
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

    <PrivacyNotice v-model="showPrivacyModal" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useReCaptcha } from 'vue-recaptcha-v3';
import apiClient from '../api/apiClient';
import PrivacyNotice from '../components/PrivacyNotice.vue';
import * as yup from 'yup'

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

// Esquema de validación con Yup
const schema = yup.object({
  nombre_completo: yup.string().required('El nombre es obligatorio'),
  correo: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  telefono: yup.string().required('El teléfono es obligatorio'),
  mensaje: yup.string().required('El mensaje no puede estar vacío'),
  privacyAccepted: yup.boolean().oneOf([true], 'Debes aceptar el aviso de privacidad'),
})


const privacyAccepted = ref(false);
const isLoading = ref(false);
const showSuccessModal = ref(false);
const showPrivacyModal = ref(false);

onMounted(async () => {
  await recaptchaLoaded();
  const badge = document.querySelector('.grecaptcha-badge');
  if (badge) badge.style.visibility = 'visible';
});

const submitForm = async (values, { resetForm }) => {
  try {
    isLoading.value = true;
    showSuccessModal.value = false;

    // Ejecutar reCAPTCHA
    await recaptchaLoaded();
    const token = await executeRecaptcha('submit');
    console.log('reCAPTCHA token:', token);

    const payload = {
      ...values,
      recaptchaToken: token
    };

    const response = await apiClient.post('/formulario/createData', payload);

    if ([200, 201].includes(response.status)) {
      showSuccessModal.value = true;
      resetForm();
      privacyAccepted.value = false;
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert(error.response?.data?.message || error.message || 'Error al enviar el formulario');
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

/* Ajustes para el header del modal con el nuevo botón */
.modal-header {
  position: relative;
  padding: 1.5rem 3rem 1rem 1.5rem;
  text-align: center;
}

.contact {
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f8faff, #e6f0ff);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(13, 71, 161, 0.15);
  width: 100%;
  max-width: 100%;
  margin: 0;
  transition: all 0.3s ease;
  box-sizing: border-box;
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
  width: 100%;
}

.form-group {
  position: relative;
  width: 100%;
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

.privacy-checkbox {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.privacy-checkbox input {
  width: auto;
  margin-right: 0.8rem;
}

.privacy-checkbox label {
  font-size: 0.9rem;
  color: #555;
}

.privacy-checkbox a {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
}

.privacy-checkbox a:hover {
  text-decoration: underline;
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

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(-20px);
}
.error-message {
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}

@media (max-width: 768px) {
  .contact {
    padding: 2rem 1.5rem;
    border-radius: 12px;
    width: 100%;
    max-width: 7000px;
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