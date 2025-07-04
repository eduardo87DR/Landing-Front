<template>
  <section class="details">
    <div class="container" v-if="serviceData.title !== 'Servicio no encontrado'">
      <h1 class="title">{{ serviceData.title }}</h1>
      <div class="icon-wrapper" v-html="serviceData.iconSvg"></div>
      <p class="description">{{ serviceData.fullDescription }}</p>
      <p class="extra-info">{{ serviceData.extraInfo }}</p>
      <ul class="features-list">
        <li v-for="(item, i) in serviceData.features" :key="i">{{ item }}</li>
      </ul>
      <button class="cta-button" @click="goToForm">Solicitar Informe</button>
    </div>
    <div class="not-found" v-else>
      <h2>Servicio no encontrado</h2>
      <p>El servicio especificado no está disponible.</p>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const serviceId = route.params.service

const goToForm = () => {
  router.push('/form')
}

const serviceMap = {
  automatizaciones: {
    title: 'Automatizaciones',
    fullDescription:
      'Automatiza procesos internos y operativos con flujos inteligentes adaptados a tu negocio, aumentando la eficiencia y reduciendo errores humanos.',
    extraInfo:
      'Implementamos sistemas que integran IA y automatización para transformar tareas repetitivas en procesos automáticos, mejorando productividad y control.',
    features: [
      'Integración de IA para tareas rutinarias',
      'Optimización de flujos de trabajo',
      'Monitoreo y análisis en tiempo real',
      'Reducción de costos operativos'
    ],
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a4 4 0 018 0v6M5 17h14M9 21h6"/></svg>`
  },
  'paginas-web': {
    title: 'Páginas Web',
    fullDescription:
      'Diseño y desarrollo de sitios web modernos, rápidos y adaptables para cualquier dispositivo, con enfoque en experiencia de usuario y SEO.',
    extraInfo:
      'Creamos plataformas escalables con tecnologías actualizadas que garantizan seguridad, velocidad y funcionalidad integral para tu negocio online.',
    features: [
      'Diseño responsive y adaptativo',
      'Optimización SEO avanzada',
      'Integración con sistemas de pago y CRM',
      'Mantenimiento y soporte continuo'
    ],
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/></svg>`
  },
  'apps-moviles': {
    title: 'Aplicaciones Móviles',
    fullDescription:
      'Desarrollo de apps para iOS y Android con interfaces intuitivas y rendimiento optimizado, integradas a tus sistemas empresariales.',
    extraInfo:
      'Ofrecemos soluciones móviles nativas y multiplataforma, enfocadas en experiencia de usuario, escalabilidad y seguridad.',
    features: [
      'Desarrollo nativo y multiplataforma',
      'Integración con APIs empresariales',
      'Actualizaciones y soporte',
      'Monitoreo y analítica de uso'
    ],
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="7" y="2" width="10" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
  },
  'actualizacion-sistemas': {
    title: 'Actualización de Sistemas',
    fullDescription:
      'Modernizamos plataformas tecnológicas obsoletas, integrando nuevas funcionalidades y mejorando seguridad y rendimiento.',
    extraInfo:
      'Revisamos tu infraestructura actual y diseñamos planes de actualización escalables que minimizan riesgos y maximizan beneficios.',
    features: [
      'Análisis de arquitectura existente',
      'Planificación y ejecución de migraciones',
      'Implementación de nuevas tecnologías',
      'Pruebas y optimización continua'
    ],
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12h18M12 3v18"/></svg>`
  },
  'entornos-corporativos': {
    title: 'Entornos Corporativos',
    fullDescription:
      'Configuramos infraestructuras digitales para la colaboración eficiente y segura en entornos empresariales modernos.',
    extraInfo:
      'Ofrecemos integración de plataformas colaborativas, gestión documental y sistemas de comunicación interna adaptados a tus necesidades.',
    features: [
      'Implementación de intranets seguras',
      'Sistemas de gestión documental',
      'Herramientas colaborativas integradas',
      'Formación y soporte continuo'
    ],
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`
  },
  'soporte-redes': {
    title: 'Soporte de Redes',
    fullDescription:
      'Brindamos asistencia técnica especializada en configuración, mantenimiento y diagnóstico de redes físicas y virtuales.',
    extraInfo:
      'Garantizamos estabilidad y seguridad en tus redes mediante monitoreo, actualización y resolución eficiente de incidencias.',
    features: [
      'Auditorías y análisis de red',
      'Configuración de hardware y software',
      'Resolución rápida de fallas',
      'Monitoreo y reportes personalizados'
    ],
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>`
  },
  logistica: {
    title: 'Análisis de Logística',
    fullDescription:
      'Estudio integral de software, flujos operativos y redes para optimizar recursos y procesos logísticos.',
    extraInfo:
      'Diseñamos soluciones personalizadas para mejorar la infraestructura tecnológica y la gestión eficiente de tu cadena de suministro.',
    features: [
      'Evaluación de infraestructura tecnológica',
      'Optimización de flujos operativos',
      'Integración de sistemas de gestión',
      'Análisis de datos y reportes estratégicos'
    ],
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 7h18M3 12h18M3 17h18"/></svg>`
  }
}

const serviceData = computed(() => serviceMap[serviceId] || {
  title: 'Servicio no encontrado',
  fullDescription: 'El servicio especificado no está disponible.',
  extraInfo: '',
  features: [],
  iconSvg: ''
})
</script>

<style scoped>
.details {
  padding: 4rem 2rem;
  max-width: 900px;
  margin: auto;
  background: linear-gradient(135deg, #f0f4ff, #dbe7ff);
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.details::before {
  content: "";
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  background: radial-gradient(circle at center, #3b82f6 0%, transparent 70%);
  filter: blur(80px);
  opacity: 0.25;
  animation: pulse 20s infinite alternate;
  z-index: 0;
}

@keyframes pulse {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(40px, 40px);
  }
}

.container {
  position: relative;
  z-index: 1;
}

.title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  user-select: none;
  letter-spacing: -0.03em;
  animation: fadeInDown 0.8s ease forwards;
}

.icon-wrapper {
  margin: 1rem auto 2rem;
  width: 80px;
  height: 80px;
  color: #3b82f6;
  animation: fadeIn 1.2s ease forwards;
  stroke-width: 2;
}

.description {
  font-size: 1.25rem;
  color: #334155;
  line-height: 1.75;
  margin-bottom: 1rem;
  animation: fadeIn 1.5s ease forwards;
}

.extra-info {
  font-size: 1.05rem;
  color: #475569;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeIn 1.8s ease forwards;
}

.features-list {
  list-style-type: disc;
  color: #1e293b;
  margin: 0 auto 3rem;
  max-width: 700px;
  text-align: left;
  padding-left: 1.5rem;
  animation: fadeIn 2.1s ease forwards;
}

.features-list li {
  margin-bottom: 0.7rem;
  font-weight: 500;
}

.cta-button {
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.5);
  transition: all 0.3s ease;
  user-select: none;
  animation: fadeInUp 2.5s ease forwards;
}

.cta-button:hover {
  transform: translateY(-3px);
  background: linear-gradient(90deg, #2563eb, #4f46e5);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.7);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

.not-found {
  padding: 6rem 2rem;
  max-width: 600px;
  margin: auto;
  text-align: center;
  color: #64748b;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
