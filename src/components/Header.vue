<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">Landing Page - IDYGS93</div>

      <nav class="nav-menu">
        <template v-if="isAuthenticated">
          <button class="logout-btn" @click="logout">Cerrar sesión</button>
        </template>
        <template v-else>
          <router-link to="/">Inicio</router-link>
          <router-link to="/form">Contáctanos</router-link>
          <router-link to="/login">Iniciar Sesión</router-link>
        </template>
      </nav>
      
      <!-- Botón de menú para móviles -->
      <button class="mobile-menu-btn" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const router = useRouter();
const menuOpen = ref(false);

const isAuthenticated = computed(() => auth.isAuthenticated);

const logout = () => {
  auth.logout();
  router.push('/login');
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  const nav = document.querySelector('.nav-menu');
  if (nav) {
    nav.classList.toggle('active');
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.header {
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: color 0.3s;
  white-space: nowrap;
}

nav a:hover {
  color: #bbdefb;
}

.logout-btn {
  background: transparent;
  border: 2px solid white;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.logout-btn:hover {
  background-color: white;
  color: #0d47a1;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }
  
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: linear-gradient(90deg, #0d47a1, #1976d2);
    flex-direction: column;
    gap: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  .nav-menu.active {
    max-height: 300px;
    padding: 1rem 0;
  }
  
  .nav-menu a, 
  .nav-menu .logout-btn {
    width: 100%;
    padding: 0.75rem 1.5rem;
    text-align: center;
    border-radius: 0;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .logout-btn {
    margin-top: 0.5rem;
    width: calc(100% - 3rem);
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0.75rem 1rem;
  }
  
  .logo {
    font-size: 1rem;
    max-width: 180px;
  }
}
</style>