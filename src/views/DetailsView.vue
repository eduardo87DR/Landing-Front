<template>
  <section class="details-section">
    <div class="details-container" v-if="serviceData.title !== 'Servicio no encontrado'">
      <div class="service-header">
        <component 
          :is="serviceData.iconComponent" 
          class="service-icon" 
          :style="{ color: iconColor }"
        />
        <h1 class="service-title">{{ serviceData.title }}</h1>
      </div>
      
      <div class="service-content">
        <p class="service-description">{{ serviceData.fullDescription }}</p>
        <p class="service-extra">{{ serviceData.extraInfo }}</p>
        
        <div class="service-features">
          <h3 class="features-title">Beneficios Clave</h3>
          <ul class="features-list">
            <li 
              v-for="(item, i) in serviceData.features" 
              :key="i" 
              class="feature-item"
              :style="{ '--delay': `${i * 0.1}s` }"
            >
              <span class="feature-bullet"></span>
              <span class="feature-text">{{ item }}</span>
            </li>
          </ul>
        </div>
        
        <button class="service-cta" @click="goToForm">
          <span>Solicitar Información</span>
          <svg class="cta-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
          </svg>
        </button>
      </div>
    </div>
    
    <div class="not-found" v-else>
      <h2 class="not-found-title">Servicio no encontrado</h2>
      <p class="not-found-message">El servicio especificado no está disponible.</p>
      <button class="back-button" @click="router.push('/')">
        Volver al inicio
      </button>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import {
  Cog6ToothIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  BuildingOfficeIcon,
  WifiIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()
const serviceId = route.params.service

// Colores personalizados para cada servicio
const serviceColors = {
  automatizaciones: '#8e44ad',
  'paginas-web': '#3498db',
  'apps-moviles': '#e74c3c',
  'actualizacion-sistemas': '#f39c12',
  'entornos-corporativos': '#2ecc71',
  'soporte-redes': '#1abc9c',
  logistica: '#9b59b6'
}

const iconColor = ref('#64b5f6')

const goToForm = () => {
  router.push('/form')
}

const serviceMap = {
  automatizaciones: {
    title: 'Automatizaciones',
    fullDescription: 'Automatiza procesos internos y operativos con flujos inteligentes adaptados a tu negocio, aumentando la eficiencia y reduciendo errores humanos.',
    extraInfo: 'Implementamos sistemas que integran IA y automatización para transformar tareas repetitivas en procesos automáticos, mejorando productividad y control.',
    features: [
      'Integración de IA para tareas rutinarias',
      'Optimización de flujos de trabajo',
      'Monitoreo y análisis en tiempo real',
      'Reducción de costos operativos'
    ],
    iconComponent: Cog6ToothIcon
  },
  'paginas-web': {
    title: 'Páginas Web',
    fullDescription: 'Diseño y desarrollo de sitios web modernos, rápidos y adaptables para cualquier dispositivo, con enfoque en experiencia de usuario y SEO.',
    extraInfo: 'Creamos plataformas escalables con tecnologías actualizadas que garantizan seguridad, velocidad y funcionalidad integral para tu negocio online.',
    features: [
      'Diseño responsive y adaptativo',
      'Optimización SEO avanzada',
      'Integración con sistemas de pago y CRM',
      'Mantenimiento y soporte continuo'
    ],
    iconComponent: GlobeAltIcon
  },
  'apps-moviles': {
    title: 'Aplicaciones Móviles',
    fullDescription: 'Desarrollo de apps para iOS y Android con interfaces intuitivas y rendimiento optimizado, integradas a tus sistemas empresariales.',
    extraInfo: 'Ofrecemos soluciones móviles nativas y multiplataforma, enfocadas en experiencia de usuario, escalabilidad y seguridad.',
    features: [
      'Desarrollo nativo y multiplataforma',
      'Integración con APIs empresariales',
      'Actualizaciones y soporte',
      'Monitoreo y analítica de uso'
    ],
    iconComponent: DevicePhoneMobileIcon
  },
  'actualizacion-sistemas': {
    title: 'Actualización de Sistemas',
    fullDescription: 'Modernizamos plataformas tecnológicas obsoletas, integrando nuevas funcionalidades y mejorando seguridad y rendimiento.',
    extraInfo: 'Revisamos tu infraestructura actual y diseñamos planes de actualización escalables que minimizan riesgos y maximizan beneficios.',
    features: [
      'Análisis de arquitectura existente',
      'Planificación y ejecución de migraciones',
      'Implementación de nuevas tecnologías',
      'Pruebas y optimización continua'
    ],
    iconComponent: ArrowPathIcon
  },
  'entornos-corporativos': {
    title: 'Entornos Corporativos',
    fullDescription: 'Configuramos infraestructuras digitales para la colaboración eficiente y segura en entornos empresariales modernos.',
    extraInfo: 'Ofrecemos integración de plataformas colaborativas, gestión documental y sistemas de comunicación interna adaptados a tus necesidades.',
    features: [
      'Implementación de intranets seguras',
      'Sistemas de gestión documental',
      'Herramientas colaborativas integradas',
      'Formación y soporte continuo'
    ],
    iconComponent: BuildingOfficeIcon
  },
  'soporte-redes': {
    title: 'Soporte de Redes',
    fullDescription: 'Brindamos asistencia técnica especializada en configuración, mantenimiento y diagnóstico de redes físicas y virtuales.',
    extraInfo: 'Garantizamos estabilidad y seguridad en tus redes mediante monitoreo, actualización y resolución eficiente de incidencias.',
    features: [
      'Auditorías y análisis de red',
      'Configuración de hardware y software',
      'Resolución rápida de fallas',
      'Monitoreo y reportes personalizados'
    ],
    iconComponent: WifiIcon
  },
  logistica: {
    title: 'Análisis de Logística',
    fullDescription: 'Estudio integral de software, flujos operativos y redes para optimizar recursos y procesos logísticos.',
    extraInfo: 'Diseñamos soluciones personalizadas para mejorar la infraestructura tecnológica y la gestión eficiente de tu cadena de suministro.',
    features: [
      'Evaluación de infraestructura tecnológica',
      'Optimización de flujos operativos',
      'Integración de sistemas de gestión',
      'Análisis de datos y reportes estratégicos'
    ],
    iconComponent: ChartBarIcon
  }
}

const serviceData = computed(() => serviceMap[serviceId] || {
  title: 'Servicio no encontrado',
  fullDescription: 'El servicio especificado no está disponible.',
  extraInfo: '',
  features: [],
  iconComponent: null
})

// Configurar color del icono según el servicio
onMounted(() => {
  if (serviceColors[serviceId]) {
    iconColor.value = serviceColors[serviceId]
  }
})
</script>

<style scoped>
.details-section {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 2rem auto;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.details-container {
  background: rgba(15, 23, 42, 0.95);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.4s ease;
}

.details-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.service-header {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
  padding: 2.5rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.service-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, rgba(15, 23, 42, 0) 70%);
  animation: rotate 20s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.service-icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.service-icon:hover {
  transform: scale(1.1) rotate(10deg);
}

.service-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0;
  position: relative;
  z-index: 1;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.service-content {
  padding: 2.5rem 1.5rem;
}

.service-description {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.service-description::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: linear-gradient(to bottom, v-bind(iconColor), rgba(129, 140, 248, 0.5));
  border-radius: 3px;
}

.service-extra {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.service-features {
  margin-bottom: 3rem;
}

.features-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #a5b4fc;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.features-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, v-bind(iconColor), rgba(129, 140, 248, 0.5));
  border-radius: 3px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.5s ease-out forwards;
  animation-delay: var(--delay);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.feature-bullet {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: v-bind(iconColor);
  border-radius: 50%;
  margin-right: 1rem;
  margin-top: 0.5rem;
  flex-shrink: 0;
  box-shadow: 0 0 10px v-bind(iconColor);
}

.feature-text {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  flex: 1;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: linear-gradient(90deg, v-bind(iconColor), #6366f1);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  position: relative;
  overflow: hidden;
}

.service-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.6s ease;
}

.service-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.service-cta:hover::before {
  left: 100%;
}

.service-cta:active {
  transform: translateY(0);
}

.cta-icon {
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease;
}

.service-cta:hover .cta-icon {
  transform: translateX(5px);
}

.not-found {
  text-align: center;
  padding: 3rem 1.5rem;
  background: rgba(15, 23, 42, 0.95);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  animation: fadeIn 0.6s ease-out 0.3s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.not-found-title {
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.not-found-message {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.back-button {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

@media (min-width: 768px) {
  .details-section {
    padding: 4rem 2rem;
  }
  
  .service-header {
    padding: 3rem;
  }
  
  .service-icon {
    width: 4.5rem;
    height: 4.5rem;
  }
  
  .service-title {
    font-size: 2.3rem;
  }
  
  .service-content {
    padding: 3rem;
  }
  
  .service-description {
    font-size: 1.2rem;
  }
  
  .features-title {
    font-size: 1.4rem;
  }
  
  .feature-text {
    font-size: 1.1rem;
  }
  
  .not-found {
    padding: 4rem;
  }
  
  .not-found-title {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  .details-container {
    display: flex;
    min-height: 600px;
  }
  
  .service-header {
    flex: 0 0 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: none;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .service-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>