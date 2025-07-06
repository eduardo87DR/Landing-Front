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
  padding: 6rem 2rem;
  max-width: 900px;
  margin: 4rem auto;
  background: rgba(23, 42, 69, 0.85);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.details::before {
  content: "";
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  background: radial-gradient(circle at center, rgba(100, 181, 246, 0.15) 0%, transparent 70%);
  filter: blur(80px);
  opacity: 0.3;
  animation: pulse 20s infinite alternate;
  z-index: 0;
}

@keyframes pulse {
  0% { transform: translate(0, 0); }
  50% { transform: translate(40px, 40px); }
  100% { transform: translate(0, 0); }
}

.container {
  position: relative;
  z-index: 1;
  padding: 0 1.5rem;
}

.title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #64b5f6, #42a5f5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  user-select: none;
  letter-spacing: -0.03em;
  text-shadow: 0 2px 10px rgba(100, 181, 246, 0.3);
  animation: fadeInDown 0.8s ease forwards;
}

.icon-wrapper {
  margin: 1.5rem auto 2.5rem;
  width: 100px;
  height: 100px;
  color: #64b5f6;
  animation: fadeIn 1.2s ease forwards;
  stroke-width: 1.5;
  filter: drop-shadow(0 4px 8px rgba(100, 181, 246, 0.3));
}

.icon {
  width: 100%;
  height: 100%;
}

.description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  animation: fadeIn 1.5s ease forwards;
  font-weight: 400;
}

.extra-info {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeIn 1.8s ease forwards;
  line-height: 1.7;
}

.features-list {
  list-style-type: none;
  margin: 0 auto 3.5rem;
  max-width: 700px;
  text-align: center;
  padding: 0;
  animation: fadeIn 2.1s ease forwards;
}

.features-list li {
  margin-bottom: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  position: relative;
  padding-left: 1.8rem;
  text-align: left;
  font-size: 1.1rem;
}

.features-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 0.6em;
  height: 0.6em;
  background: #64b5f6;
  border-radius: 50%;
  transform: translateY(-50%);
}

.cta-button {
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  color: white;
  border: none;
  padding: 1.3rem 3.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(25, 118, 210, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  user-select: none;
  animation: fadeInUp 2.5s ease forwards;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.cta-button::before {
  content: "";
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

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(33, 150, 243, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.15);
}

.cta-button:hover::before {
  opacity: 1;
}

.cta-button:active {
  transform: translateY(1px);
  box-shadow: 0 5px 15px rgba(25, 118, 210, 0.4);
}

/* Efecto de onda al hacer clic */
.cta-button:not(:disabled)::after {
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

.cta-button:not(:disabled):focus:not(:active)::after {
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
  padding: 8rem 2rem;
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  font-weight: 600;
  background: rgba(23, 42, 69, 0.85);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.not-found h2 {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

/* Responsive Design */
@media (max-width: 768px) {
  .details {
    padding: 4rem 1.5rem;
    margin: 2rem auto;
    border-radius: 16px;
  }
  
  .title {
    font-size: 2.2rem;
  }
  
  .icon-wrapper {
    width: 80px;
    height: 80px;
    margin: 1rem auto 2rem;
  }
  
  .description {
    font-size: 1.2rem;
  }
  
  .features-list li {
    font-size: 1rem;
    padding-left: 1.5rem;
  }
  
  .not-found {
    padding: 5rem 1.5rem;
    margin: 2rem auto;
  }
}

@media (max-width: 480px) {
  .details {
    padding: 3rem 1rem;
    margin: 1.5rem auto;
    border-radius: 14px;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .extra-info {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 1.1rem 2.5rem;
    font-size: 1.1rem;
  }
  
  .not-found h2 {
    font-size: 1.6rem;
  }
  
  .not-found p {
    font-size: 1rem;
  }
}
</style>