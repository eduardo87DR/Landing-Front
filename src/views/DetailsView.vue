<template>
  <section class="details-section">
    <div class="details-container" v-if="serviceData.title !== 'Servicio no encontrado'">
      <div class="service-header">
        <component :is="serviceData.iconComponent" class="service-icon" />
        <h1 class="service-title">{{ serviceData.title }}</h1>
      </div>
      
      <div class="service-content">
        <p class="service-description">{{ serviceData.fullDescription }}</p>
        <p class="service-extra">{{ serviceData.extraInfo }}</p>
        
        <div class="service-features">
          <h3 class="features-title">Beneficios Clave</h3>
          <ul class="features-list">
            <li v-for="(item, i) in serviceData.features" :key="i" class="feature-item">
              <span class="feature-bullet"></span>
              <span class="feature-text">{{ item }}</span>
            </li>
          </ul>
        </div>
        
        <button class="service-cta" @click="goToForm">Solicitar Información</button>
      </div>
    </div>
    
    <div class="not-found" v-else>
      <h2 class="not-found-title">Servicio no encontrado</h2>
      <p class="not-found-message">El servicio especificado no está disponible.</p>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
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
</script>

<style scoped>
.details-section {
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 2rem auto;
}

.details-container {
  background: rgba(23, 42, 69, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.service-header {
  background: linear-gradient(90deg, rgba(25, 118, 210, 0.2), rgba(100, 181, 246, 0.15));
  padding: 2rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.service-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  color: #64b5f6;
}

.service-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  background: linear-gradient(90deg, #64b5f6, #42a5f5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.service-content {
  padding: 2rem 1.5rem;
}

.service-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

.service-extra {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.service-features {
  margin-bottom: 2.5rem;
}

.features-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #64b5f6;
  margin-bottom: 1.2rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}

.feature-bullet {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #64b5f6;
  border-radius: 50%;
  margin-right: 0.8rem;
  margin-top: 0.6rem;
  flex-shrink: 0;
}

.feature-text {
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}

.service-cta {
  display: inline-block;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  color: white;
  border: none;
  padding: 0.9rem 2.2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

.service-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(25, 118, 210, 0.4);
}

.service-cta:active {
  transform: translateY(0);
}

.not-found {
  text-align: center;
  padding: 3rem 1.5rem;
  background: rgba(23, 42, 69, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.not-found-title {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

@media (min-width: 768px) {
  .details-section {
    padding: 4rem 2rem;
  }
  
  .service-header {
    padding: 2.5rem;
  }
  
  .service-icon {
    width: 3.5rem;
    height: 3.5rem;
  }
  
  .service-title {
    font-size: 2rem;
  }
  
  .service-content {
    padding: 2.5rem;
  }
  
  .service-description {
    font-size: 1.2rem;
  }
  
  .features-title {
    font-size: 1.3rem;
  }
  
  .not-found {
    padding: 4rem 2rem;
  }
  
  .not-found-title {
    font-size: 1.8rem;
  }
}

@media (min-width: 1024px) {
  .details-container {
    display: flex;
    min-height: 500px;
  }
  
  .service-header {
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: none;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .service-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>