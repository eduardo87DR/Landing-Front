<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <span class="logo-name">Nexus</span>
        <span class="logo-suffix">Soluciones Digitales</span>
      </div>

      <nav class="nav-menu">
        <template v-if="isAuthenticated">
          <button class="logout-btn" @click="logout">
            <span>Cerrar sesión</span>
            <ArrowRightOnRectangleIcon class="logout-icon" />
          </button>
        </template>
        <template v-else>
          <router-link to="/" class="nav-link">
            <HomeIcon class="nav-icon" />
            <span>Inicio</span>
          </router-link>
          <router-link to="/form" class="nav-link">
            <ChatBubbleBottomCenterTextIcon class="nav-icon" />
            <span>Contáctanos</span>
          </router-link>
          <router-link to="/login" class="nav-link">
            <ArrowRightOnRectangleIcon class="nav-icon" />
            <span>Iniciar Sesión</span>
          </router-link>
        </template>
      </nav>
      
      <!-- Botón de menú para móviles -->
      <button class="mobile-menu-btn" @click="toggleMenu">
        <Bars3Icon class="menu-icon" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import {
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon
} from '@heroicons/vue/24/outline';

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
.header {
  background: rgba(15, 31, 67, 0.95);
  color: white;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header:hover {
  background: rgba(15, 23, 42, 0.98);
}

.header-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
}

.logo-name {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.logo-suffix {
  color: #e2e8f0;
  font-weight: 500;
  opacity: 0.9;
}

.nav-menu {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 500;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.nav-link.router-link-active {
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
}

.nav-icon {
  width: 1.2rem;
  height: 1.2rem;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.7rem 1.2rem;
  color: #e2e8f0;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.2);
}

.logout-icon {
  width: 1.2rem;
  height: 1.2rem;
}

.mobile-menu-btn {
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  color: #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.menu-icon {
  width: 1.5rem;
  height: 1.5rem;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .header-content {
    padding: 1rem 1.5rem;
  }
  
  .nav-link, .logout-btn {
    padding: 0.6rem 1rem;
  }
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }
  
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    flex-direction: column;
    gap: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  .nav-menu.active {
    max-height: 400px;
    padding: 1rem 0;
  }
  
  .nav-link, 
  .logout-btn {
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    justify-content: center;
  }
  
  .nav-link:hover,
  .logout-btn:hover {
    background: rgba(99, 102, 241, 0.1);
  }
  
  .nav-link.router-link-active {
    background: rgba(99, 102, 241, 0.2);
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0.75rem 1rem;
  }
  
  .logo {
    font-size: 1.1rem;
  }
  
  .logo-suffix {
    display: none;
  }
}
</style>