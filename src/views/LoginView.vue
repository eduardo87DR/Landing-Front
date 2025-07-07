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
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.login-card {
  background: rgba(23, 42, 69, 0.95);
  width: 100%;
  max-width: 480px; /* Ancho máximo más adecuado */
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  text-align: center;
  animation: fadeInUp 0.9s ease forwards;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 1rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-title {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  font-weight: 500;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 42px 12px 14px;
  border: 2px solid rgba(100, 181, 246, 0.3);
  border-radius: 8px;
  font-size: 0.95rem;
  background: rgba(10, 25, 47, 0.5);
  color: #ffffff;
  transition: all 0.3s ease;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #64b5f6;
  box-shadow: 0 0 0 3px rgba(100, 181, 246, 0.2);
}

.input-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  stroke: rgba(100, 181, 246, 0.7);
}

.login-button {
  margin-top: 1.5rem;
  width: 100%;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  border: none;
  padding: 14px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(25, 118, 210, 0.4);
}

.login-button:disabled {
  background: #37474f;
  cursor: not-allowed;
}

.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.error-message {
  margin-top: 1rem;
  color: #ff5252;
  font-weight: 600;
}

/* Media Queries para responsividad */
@media (min-width: 768px) {
  .login-card {
    padding: 3rem 2.5rem;
    max-width: 500px;
  }
  
  .login-title {
    font-size: 2.2rem;
  margin-bottom: 0.6rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
  
  .input-wrapper input {
    padding: 14px 44px 14px 16px;
    font-size: 1rem;
  }
  
  .login-button {
    padding: 16px 0;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .login-view {
    padding: 0.5rem;
  }
  
  .login-card {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }
  
  .login-title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 0.95rem;
    margin-bottom: 1.8rem;
  }
  
  .form-group {
    margin-bottom: 1.2rem;
  }
  
  .input-wrapper input {
    padding: 10px 38px 10px 12px;
    font-size: 0.9rem;
  }
  
  .login-button {
    padding: 12px 0;
    font-size: 1rem;
  }
}
</style>