<template>
  <section class="login-view">
    <div class="login-card">
      <h1 class="login-title">Bienvenido a tu Dashboard</h1>
      <p class="subtitle"> ¿Eres un administrador? Inicia sesión en tu cuenta</p>
      <form @submit.prevent="handleLogin" novalidate>
        <div class="form-group">
          <label for="identifier">Usuario o Correo</label>
          <div class="input-wrapper">
            <input
              type="text"
              id="identifier"
              v-model="identifier"
              placeholder="Ingresa usuario o correo"
              required
              autocomplete="username"
              aria-label="Usuario o correo"
            />
            <svg
              class="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              <path d="M12 14v7" />
              <path d="M4 12v-1a8 8 0 0 1 16 0v1" />
            </svg>
          </div>
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <div class="input-wrapper">
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Ingresa tu contraseña"
              required
              autocomplete="current-password"
              aria-label="Contraseña"
            />
            <svg
              class="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>

        <button type="submit" :disabled="loading" class="login-button">
          <span v-if="!loading">Iniciar sesión</span>
          <span v-else class="loading-text">
            Ingresando...
            <svg
              class="loading-spinner"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 50 50"
            >
              <circle
                class="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke-width="5"
              />
            </svg>
          </span>
        </button>

        <p v-if="error" class="error-message" role="alert">{{ error }}</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const identifier = ref('')
const password = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

const auth = useAuthStore()

const handleLogin = async () => {
  error.value = null
  loading.value = true
  try {
    await auth.login(identifier.value, password.value)
  } catch (err: any) {
    error.value = err.response?.data?.error || 'Error al iniciar sesión'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
    /* Fuentes y base */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

.login-view {
  min-height: 100vh;
  display: flex;
  justify-content: flex-start; 
  padding-left: 10%; 
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
  max-width: none; 
  width: 900px;
}


.login-view::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.login-card {
  background: rgba(23, 42, 69, 0.9);
  max-width: 1000px;
  width: 100%;
  border-radius: 16px;
  padding: 3.5rem 3rem 2.5rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  text-align: center;
  animation: fadeInUp 0.9s ease forwards;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px) translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(0);
  }
}

.login-title {
  font-size: 2.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.4rem;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* efecto typewriter */
.login-title::after {
  content: '|';
  animation: blink 1.2s steps(2, start) infinite;
  position: absolute;
  right: 0;
  top: 0;
  color: #64b5f6;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.8rem;
  font-weight: 500;
}

.form-group {
  margin-bottom: 1.8rem;
  text-align: left;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.6rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  user-select: none;
  transition: all 0.3s ease;
}

/* Input wrapper para icono y campo */
.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 14px 44px 14px 16px;
  border: 2px solid rgba(100, 181, 246, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  background: rgba(10, 25, 47, 0.5);
  transition: all 0.3s ease;
  color: #ffffff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.input-wrapper input::placeholder {
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #64b5f6;
  box-shadow: 0 0 0 3px rgba(100, 181, 246, 0.2),
              inset 0 1px 3px rgba(0, 0, 0, 0.2);
  background: rgba(10, 25, 47, 0.7);
}

/* Animación de flotación para los campos */
.form-group:hover label {
  transform: translateX(5px);
}

.form-group:hover .input-wrapper input {
  border-color: rgba(100, 181, 246, 0.5);
}

.input-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  stroke: rgba(100, 181, 246, 0.7);
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-wrapper input:focus + .input-icon {
  stroke: #64b5f6;
  transform: translateY(-50%) scale(1.1);
}

.login-button {
  margin-top: 1.6rem;
  width: 100%;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  border: none;
  padding: 16px 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(25, 118, 210, 0.35),
              0 0 0 1px rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.login-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #2196f3, #1976d2);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.login-button:hover:not(:disabled) {
  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
}

.login-button:hover:not(:disabled)::before {
  opacity: 1;
}

.login-button:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: 0 5px 15px rgba(25, 118, 210, 0.3);
}

.login-button:disabled {
  background: #37474f;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
  color: rgba(255, 255, 255, 0.4);
}

/* Efecto de onda al hacer clic */
.login-button:not(:disabled)::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}

.login-button:not(:disabled):focus:not(:active)::after {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(20, 20);
    opacity: 0;
  }
}

/* Spinner animado para loading */
.loading-spinner {
  animation: spin 1s linear infinite;
  stroke: white;
}

.loading-spinner .path {
  stroke-linecap: round;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.error-message {
  margin-top: 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ff5252;
  user-select: none;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

/* Responsive */
@media (max-width: 768px) {
  .login-view {
    padding-left: 5%;
    padding-right: 5%;
    justify-content: center;
  }
  
  .login-card {
    padding: 2.8rem 2rem 2rem;
    border-radius: 12px;
  }
  
  .login-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .login-view {
    padding: 1.5rem;
  }
  
  .login-card {
    padding: 2.5rem 1.5rem 1.5rem;
  }
  
  .login-title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}
</style>
