<template>
  <section class="digital-solutions" id="soluciones-digitales">
    <div class="digital-solutions-container">
      <div class="content-wrapper">
        <h1>Transforma tu Negocio con Soluciones Digitales</h1>
        <p class="main-text">
          Potenciamos tu presencia digital con herramientas innovadoras diseñadas para el crecimiento empresarial.
        </p>

        <div class="features-grid">
          <div
            v-for="service in services"
            :key="service.id"
            class="feature-item"
            @click="goToDetails(service.id)"
          >
            <div class="feature-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDetails = (serviceId) => {
  router.push(`/details/${serviceId}`)
}

const services = [
  {
    id: 'automatizaciones',
    title: 'Automatizaciones',
    description: 'Optimiza procesos con inteligencia artificial',
    icon: '🤖'
  },
  {
    id: 'paginas-web',
    title: 'Páginas Web',
    description: 'Desarrollo web adaptable y funcional',
    icon: '🌐'
  },
  {
    id: 'apps-moviles',
    title: 'Aplicaciones Móviles',
    description: 'Llega a tus clientes en cualquier dispositivo',
    icon: '📱'
  },
  {
    id: 'actualizacion-sistemas',
    title: 'Actualización de Sistemas',
    description: 'Moderniza tu infraestructura tecnológica',
    icon: '🔧'
  },
  {
    id: 'entornos-corporativos',
    title: 'Entornos Corporativos',
    description: 'Implementación de soluciones empresariales',
    icon: '🏢'
  },
  {
    id: 'soporte-redes',
    title: 'Soporte de Redes',
    description: 'Diagnóstico y solución de problemas de red',
    icon: '📡'
  },
  {
    id: 'logistica',
    title: 'Análisis de Logística',
    description: 'Evaluación de software e infraestructura de red',
    icon: '📊'
  }
]
</script>

<style scoped>
.digital-solutions {
  padding: 3rem 1rem;
  text-align: center;
  background: linear-gradient(145deg, #0f172a, #1e3a8a);
  color: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  margin: 0 auto 3rem;
  max-width: 1400px;
  width: calc(100% - 2rem);
  position: relative;
  overflow: hidden;
}

.digital-solutions::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  animation: pulse 15s infinite alternate;
  z-index: 0;
}

@keyframes pulse {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.digital-solutions-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  padding: 1rem;
}

.digital-solutions h1 {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  margin-bottom: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 0 1rem;
}

.main-text {
  font-size: clamp(1rem, 3vw, 1.4rem);
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 0 0.5rem;
}

.feature-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: clamp(2rem, 6vw, 2.5rem);
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: clamp(1.2rem, 3.5vw, 1.4rem);
  margin-bottom: 0.8rem;
  color: #e2e8f0;
}

.feature-item p {
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  opacity: 0.9;
  line-height: 1.5;
}

/* Mejoras para touch devices */
@media (hover: none) {
  .feature-item:hover {
    transform: none;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .feature-item:active {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
  }
}

/* Media Queries específicas */
@media (min-width: 768px) {
  .digital-solutions {
    padding: 4rem 2rem;
    border-radius: 20px;
    margin-bottom: 5rem;
  }
  
  .content-wrapper {
    padding: 2rem;
  }
  
  .features-grid {
    gap: 2rem;
    margin: 3rem 0;
  }
  
  .feature-item {
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  .digital-solutions {
    width: 90%;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/* Pequeñas pantallas (menos de 400px) */
@media (max-width: 400px) {
  .digital-solutions {
    width: calc(100% - 1rem);
    padding: 2rem 0.5rem;
    border-radius: 12px;
  }
  
  .feature-item {
    min-height: auto;
    padding: 1.25rem 0.75rem;
  }
}
</style>