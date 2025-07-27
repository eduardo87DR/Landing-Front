<template>
  <section class="login-view">
    <div class="login-container">
      <div class="login-image">
        <img src="https://ciberseguridadtips.com/wp-content/uploads/2022/07/tipos-de-seguridad-informatica-2.jpg" alt="Seguridad informática" />
        <div class="image-overlay">
          <h2>Panel de Administración Nexus</h2>
          <p>Gestiona, monitorea y controla todos los aspectos del sistema</p>
          <ul class="features-list">
            <li>Administra leads y mensajes de usuarios</li>
            <li>Monitor del sistema en tiempo real</li>
            <li>Reportes y análisis avanzados</li>
          </ul>
        </div>
      </div>

      <div class="login-card">
        <div class="login-header">
          <LockClosedIcon class="login-icon" />
          <h1 class="login-title">Acceso Administrativo</h1>
          <p class="subtitle">Credenciales exclusivas para personal autorizado</p>
        </div>

        <form @submit.prevent="handleLogin" novalidate>
          <div class="form-group">
            <label for="identifier">
              <UserIcon class="label-icon" />
              <span>Usuario o Correo</span>
            </label>
            <div class="input-wrapper">
              <input
                type="text"
                id="identifier"
                v-model="identifier"
                placeholder="Ingresa tu usuario o correo"
                required
                autocomplete="username"
                aria-label="Usuario administrador"
              />
              <AtSymbolIcon class="input-icon" />
            </div>
          </div>

          <div class="form-group">
            <label for="password">
              <KeyIcon class="label-icon" />
              <span>Contraseña</span>
            </label>
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
              <EyeSlashIcon class="input-icon" @click="togglePasswordVisibility" />
            </div>
          </div>

          <button type="submit" :disabled="loading" class="login-button">
            <span v-if="!loading">Acceder al Panel</span>
            <span v-else class="loading-text">
              <ArrowPathIcon class="loading-spinner" />
              <span>Verificando...</span>
            </span>
          </button>

          <p v-if="error" class="error-message" role="alert">
            <ExclamationTriangleIcon class="error-icon" />
            <span>{{ error }}</span>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import {
  LockClosedIcon,
  UserIcon,
  AtSymbolIcon,
  KeyIcon,
  EyeSlashIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

const identifier = ref('')
const password = ref('')
const loading = ref(false)
const error = ref<string | null>(null)
const showPassword = ref(false)

const auth = useAuthStore()

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
  const passwordInput = document.getElementById('password') as HTMLInputElement
  if (passwordInput) {
    passwordInput.type = showPassword.value ? 'text' : 'password'
  }
}

const handleLogin = async () => {
  error.value = null
  loading.value = true
  try {
    await auth.login(identifier.value, password.value)
  } catch (err: any) {
    error.value = err.response?.data?.error || 'Credenciales incorrectas o acceso no autorizado'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-view {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  width: 100%;
  max-width: 1000px;
  min-height: 600px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
  margin: 1rem;
}

.login-image {
  flex: 1;
  position: relative;
  background-color: #1e293b;
}

.login-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%);
  color: white;
}

.image-overlay h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.image-overlay p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.features-list li {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
}

.features-list li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #818cf8;
}

.login-card {
  width: 100%;
  max-width: 450px;
  padding: 3rem 2.5rem;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-header {
  margin-bottom: 2.5rem;
}

.login-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  color: #818cf8;
  background: rgba(129, 140, 248, 0.1);
  padding: 0.75rem;
  border-radius: 50%;
  border: 2px solid rgba(129, 140, 248, 0.2);
}

.login-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0;
  font-weight: 400;
}

.form-group {
  margin-bottom: 1.75rem;
  text-align: left;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
}

.label-icon {
  width: 1.1rem;
  height: 1.1rem;
  color: #818cf8;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 0.85rem 3rem 0.85rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.95rem;
  background: rgba(30, 41, 59, 0.5);
  color: white;
  transition: all 0.3s ease;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #818cf8;
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);
}

.input-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.2s ease;
}

.input-icon:hover {
  color: #818cf8;
}

.login-button {
  margin-top: 1.5rem;
  width: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border: none;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
}

.login-button:disabled {
  background: #4b5563;
  cursor: not-allowed;
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

.error-message {
  margin-top: 1.5rem;
  color: #f87171;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  padding: 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 6px;
}

.error-icon {
  width: 1.1rem;
  height: 1.1rem;
}

/* Media Queries */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    min-height: auto;
  }
  
  .login-image {
    display: none;
  }
  
  .login-card {
    max-width: 100%;
    padding: 2.5rem 2rem;
  }
  
  .login-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 2rem 1.5rem;
  }
  
  .login-title {
    font-size: 1.4rem;
  }
  
  .form-group label {
    font-size: 0.9rem;
  }
  
  .input-wrapper input {
    font-size: 0.9rem;
  }
  
  .login-button {
    padding: 0.85rem 0;
    font-size: 0.95rem;
  }
}
</style>