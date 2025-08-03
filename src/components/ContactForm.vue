<template>
  <section class="contact-view">
    <div class="contact-container">
      <div class="contact-intro">
        <h2 class="intro-title">¿Necesitas ayuda?</h2>
        <p class="intro-text">
          ¿Tienes dudas sobre nuestros servicios? ¿Necesitas asistencia técnica o información adicional? 
          Completa el siguiente formulario y nuestro equipo de soporte se pondrá en contacto contigo a la brevedad.
        </p>
        
        <div class="contact-features">
          <div class="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <h3>Soporte personalizado</h3>
            <p>Asistencia técnica especializada para resolver tus inquietudes</p>
          </div>
          
          <div class="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h3>Respuesta rápida</h3>
            <p>Nos comprometemos a responderte en menos de 24 horas hábiles</p>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <h2 class="form-title">Formulario de contacto</h2>
        <p class="form-subtitle">Completa los siguientes datos y nos comunicaremos contigo</p>
        
        <Form @submit="submitForm" :validation-schema="schema" v-slot="{ errors, meta }" class="form">
          <div class="form-group">
            <Field
              name="nombre_completo"
              type="text"
              placeholder="Guillermo García Canul"
              as="input"
              class="input-field"
              validate-on-blur
              oninput="this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')"
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
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
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
              oninput="this.value = this.value.replace(/[^\d\s+\-()]/g, '')"
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
            <span v-else class="loading-text">
              <svg class="loading-spinner" viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5"></circle>
              </svg>
              <span>Enviando...</span>
            </span>
          </button>
        </Form>
      </div>
    </div>

    <!-- Modal de éxito -->
    <Transition name="modal">
      <div v-if="showSuccessModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <button class="close-button" @click="closeModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div class="modal-header">
              <h3>¡Mensaje enviado!</h3>
            </div>
            <div class="modal-body">
              <div class="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#4CAF50">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p>Hemos recibido tu mensaje correctamente. Te responderemos a la brevedad.</p>
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
import apiClient from '@/api/apiClient';
import PrivacyNotice from '../components/PrivacyNotice.vue';
import * as yup from 'yup'

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

// Validaciones en campos del formulario
const schema = yup.object({
  nombre_completo: yup.string()
    .required('El nombre es obligatorio')
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo debe contener letras y espacios'),
    
  correo: yup.string()
    .email('Correo inválido')
    .required('El correo es obligatorio')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Ingresa un correo electrónico válido'),
    
  telefono: yup.string()
    .required('El teléfono es obligatorio')
    .matches(/^[\d\s+\-()]+$/, 'Solo se permiten números, espacios y los caracteres + - ( )')
    .min(8, 'El teléfono debe tener al menos 8 caracteres'),
    
  mensaje: yup.string()
    .required('El mensaje no puede estar vacío')
    .min(10, 'El mensaje debe tener al menos 10 caracteres'),
    
  privacyAccepted: yup.boolean()
    .oneOf([true], 'Debes aceptar el aviso de privacidad')
});

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
.contact-view {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  padding-top: 80px;
  
}

.contact-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
}

.contact-intro {
  flex: 1;
  padding: 3rem;
  background: rgba(16, 31, 54, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
}

.contact-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  background: rgba(18, 31, 63, 0.5);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(79, 21, 134, 0.2);
}

.feature-item svg {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.feature-item p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.contact-form {
  flex: 1;
  padding: 3rem;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(8px);
}

.form-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.textarea-field {
  font-family: inherit;
}

.form-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  font-weight: 400;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
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
  color: #818cf8;
  background: #0f172a;
  padding: 0 5px;
  z-index: 2;
  transition: all 0.2s ease;
  pointer-events: none;
}

.input-field, .textarea-field {
  width: 100%;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1rem;
  background: rgba(30, 41, 59, 0.5);
  color: white;
  transition: all 0.3s ease;
}

.textarea-field {
  resize: vertical;
  min-height: 120px;
}

.input-field:focus, .textarea-field:focus {
  border-color: #818cf8;
  outline: none;
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);
}

.input-field:focus + label,
.input-field:not(:placeholder-shown) + label,
.textarea-field:focus + label,
.textarea-field:not(:placeholder-shown) + label {
  top: -0.6rem;
  left: 0.8rem;
  font-size: 0.8rem;
  color: #818cf8;
  background: #0f172a;
}

.focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #818cf8, #6366f1);
  transition: width 0.4s ease;
}

.input-field:focus ~ .focus-border,
.textarea-field:focus ~ .focus-border {
  width: 100%;
}

.privacy-checkbox {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.privacy-checkbox input {
  width: auto;
  margin-right: 0.8rem;
  accent-color: #818cf8;
}

.privacy-checkbox label {
  position: static;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  padding: 0;
  transform: none;
}

.privacy-checkbox a {
  color: #818cf8;
  text-decoration: none;
  font-weight: 500;
}

.privacy-checkbox a:hover {
  text-decoration: underline;
}

.error-message {
  color: #f87171;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 0.5rem;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.loading-spinner {
  width: 1.25rem;
  height: 1.25rem;
  animation: spin 1s linear infinite;
  color: white;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
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
  max-width: 400px;
  margin: 0 auto;
  background-color: #1e293b;
  border-radius: 12px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

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
  color: rgba(255, 255, 255, 0.7);
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.modal-header {
  position: relative;
  padding: 1.5rem 3rem 1rem 1.5rem;
  text-align: center;
}

.modal-header h3 {
  margin: 0;
  color: white;
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
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

.modal-footer {
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-button {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
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
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.3);
}

@media (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  
  .contact-intro, .contact-form {
    padding: 2rem 1.5rem;
    width: 100%;
  }
  
  .intro-title, .form-title {
    font-size: 1.8rem;
    text-align: center;
  }

  .intro-text, .form-subtitle {
    font-size: 1rem;
    text-align: center;
  }
  
  .contact-features {
    grid-template-columns: 1fr;
    gap : 1.5rem;
  }
  .feature-item {
    padding: 1.2rem;
  }
}

@media (max-width: 650px) {
  .contact-view {
    padding: 0;
  }
  
  .contact-intro, .contact-form {
    padding: 1.5rem 1rem;
  }
  
  .intro-title, .form-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .intro-text, .form-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  
  .input-field, .textarea-field {
    padding: 1.2rem 1rem;
    font-size: 0.9rem;
  }

  .form-group label {
    font-size: 0.75rem;
    left: 0.6rem;
  }

  .submit-btn {
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
  }

  .privacy-checkbox label {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .feature-item p {
    font-size: 0.85rem;
  }
  
}

@media (max-width: 400px) {
  .contact-view {
    padding: 0;
  }
  
  .contact-container {
    flex-direction: column;
    border-radius: 16px;

  }
  
  .contact-intro {
    padding: 1.2rem 0.8rem;
    background: rgba(16, 31, 54, 0.9);
  }
  
  .intro-title {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }
  
  .intro-text {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
    text-align: center;
    line-height: 1.5;
  }
  
  .contact-features {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin-top: 1rem;
  }
  
  .feature-item {
    padding: 0.8rem;
    text-align: center;
  }
  
  .feature-item svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-bottom: 0.5rem;
  }
  
  .feature-item h3 {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }
  
  .feature-item p {
    font-size: 0.75rem;
    line-height: 1.4;
  }
  
  .contact-form {
    padding: 1.2rem 0.8rem;
  }
  
  .form-title {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }
  
  .form-subtitle {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }
  
  .form {
    gap: 1.2rem;
  }
  
  .input-field, .textarea-field {
    padding: 1rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .form-group label {
    font-size: 0.7rem;
    left: 0.6rem;
  }
  
  .textarea-field {
    min-height: 100px;
  }
  
  .privacy-checkbox {
    margin: 0.5rem 0;
  }
  
  .privacy-checkbox label {
    font-size: 0.75rem;
  }
  
  .submit-btn {
    padding: 1rem;
    font-size: 0.9rem;
  }
  
  .error-message {
    font-size: 0.7rem;
  }

  .contact-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem; 
    margin-top: 1rem;
    align-items: stretch; 
  }

  .feature-item {
    padding: 0.6rem;
    min-height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    text-align: center;
  }

  .feature-item svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto 0.4rem; 
  }

  .feature-item h3 {
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
    line-height: 1.2;
  }

  .feature-item p {
    font-size: 0.rem;
    line-height: 1.3;
    margin-top: auto;
  }
}
</style>