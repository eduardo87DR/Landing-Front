<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">Landing Page - IDYGS93</div>

      <nav>
        <template v-if="isAuthenticated">
          <button class="logout-btn" @click="logout">Cerrar sesión</button>
        </template>
        <template v-else>
          <router-link to="/">Inicio</router-link>
          <router-link to="/form">Contáctanos</router-link>
          <!-- <router-link to="/login">Iniciar Sesión</router-link> -->
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const router = useRouter();

const isAuthenticated = computed(() => auth.isAuthenticated);

const logout = () => {
  auth.logout();
  router.push('/login');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.header {
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Montserrat', sans-serif;
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  left: 50%;
  right: 50%;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: color 0.3s;
}

nav a:hover {
  color: #bbdefb;
}

.logout-btn {
  background: transparent;
  border: 2px solid white;
  padding: 0.5rem 1.5rem;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.logout-btn:hover {
  background-color: white;
  color: #0d47a1;
}
</style>

