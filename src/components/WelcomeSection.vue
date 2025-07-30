<template>
  <section class="digital-solutions" id="soluciones-digitales">
    <!-- Hero Banner con margen superior -->
    <div class="hero-banner">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-text">
          <h1>Transformación Digital <span class="highlight">a Medida</span></h1>
          <p class="hero-subtitle">
            Soluciones tecnológicas inteligentes que impulsan el crecimiento sostenible de tu negocio
          </p>
          <div class="hero-cta">
            <button class="cta-primary">Explora nuestras soluciones</button>
            <router-link to="/form">
              <button class="cta-secondary">Contacta a un experto</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="content-section">
      <div class="section-container">
        <div class="text-content">
          <span class="section-tag">ANÁLISIS INTELIGENTE</span>
          <h2>Optimización Basada en Datos</h2>
          <p>Implementamos herramientas avanzadas de análisis que revelan oportunidades ocultas en tus datos, permitiéndote tomar decisiones estratégicas con confianza.</p>
          <ul class="feature-list">
            <li><CheckCircleIcon class="list-icon" /> Segmentación avanzada de clientes</li>
            <li><CheckCircleIcon class="list-icon" /> Predicción de tendencias del mercado</li>
            <li><CheckCircleIcon class="list-icon" /> Dashboard interactivos en tiempo real</li>
          </ul>
        </div>
        <div class="image-content">
          <img src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041864.jpg" alt="Analítica digital">
          <div class="image-overlay"></div>
        </div>
      </div>
    </div>

    <div class="content-section alt-bg">
      <div class="section-container reverse">
        <div class="text-content">
          <span class="section-tag">ESTRATEGIA DIGITAL</span>
          <h2>Enfoque Centrado en Resultados</h2>
          <p>Desarrollamos roadmaps tecnológicos personalizados que alinean tus objetivos empresariales con las soluciones digitales más efectivas.</p>
          <div class="stats-container">
            <div class="stat-item">
              <span class="stat-number">+87%</span>
              <span class="stat-label">ROI promedio</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">200+</span>
              <span class="stat-label">Clientes satisfechos</span>
            </div>
          </div>
        </div>
        <div class="image-content">
          <img src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041861.jpg" alt="Enfoque estratégico">
          <div class="image-overlay"></div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <div class="section-container">
        <div class="text-content">
          <span class="section-tag">TECNOLOGÍA ESCALABLE</span>
          <h2>Infraestructura para el Crecimiento</h2>
          <p>Construimos sistemas flexibles que evolucionan con tu negocio, garantizando performance óptimo sin importar el volumen de operaciones.</p>
          <div class="tech-stack">
            <span class="tech-tag">Cloud Computing</span>
            <span class="tech-tag">Microservicios</span>
            <span class="tech-tag">APIs Integradas</span>
          </div>
        </div>
        <div class="image-content">
          <img src="https://blog.coverix.mx/hs-fs/hubfs/Tips%20para%20mejorar%20la%20infraestructura%20de%20TI%20en%20tu%20empresa.jpg?width=980&height=652&name=Tips%20para%20mejorar%20la%20infraestructura%20de%20TI%20en%20tu%20empresa.jpg" alt="Resultados medibles">
          <div class="image-overlay"></div>
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="services-section">
      <div class="services-header">
        <span class="section-tag center">NUESTROS SERVICIOS</span>
        <h2>Soluciones Especializadas para Necesidades Únicas</h2>
        <p class="services-subtitle">Cada proyecto recibe atención personalizada de nuestro equipo de expertos certificados</p>
      </div>

      <div class="features-grid">
        <div
          v-for="service in services"
          :key="service.id"
          class="feature-item"
          @click="goToDetails(service.id)"
        >
          <div class="feature-icon-container">
            <component :is="service.icon" class="feature-icon" />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <div class="feature-hover-content">
            <span>Ver detalles</span>
            <ChevronRightIcon class="feature-hover-indicator" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {
  Cog6ToothIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  BuildingOfficeIcon,
  WifiIcon,
  ChartBarIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const router = useRouter()

const goToDetails = (serviceId) => {
  router.push(`/details/${serviceId}`)
}

const services = [
  {
    id: 'automatizaciones',
    title: 'Automatización Inteligente',
    description: 'Flujos de trabajo optimizados con IA',
    icon: Cog6ToothIcon
  },
  {
    id: 'paginas-web',
    title: 'Experiencias Web Premium',
    description: 'Diseño conversional y alto desempeño',
    icon: GlobeAltIcon
  },
  {
    id: 'apps-moviles',
    title: 'Aplicaciones Nativas',
    description: 'Soluciones móviles multiplataforma',
    icon: DevicePhoneMobileIcon
  },
  {
    id: 'actualizacion-sistemas',
    title: 'Modernización Tecnológica',
    description: 'Migración segura a nuevas plataformas',
    icon: ArrowPathIcon
  },
  {
    id: 'entornos-corporativos',
    title: 'Ecosistemas Empresariales',
    description: 'Integración de sistemas complejos',
    icon: BuildingOfficeIcon
  },
  {
    id: 'soporte-redes',
    title: 'Infraestructura de Redes',
    description: 'Soluciones de conectividad segura',
    icon: WifiIcon
  },
  {
    id: 'logistica',
    title: 'Analítica Avanzada',
    description: 'Business Intelligence personalizado',
    icon: ChartBarIcon
  }
]
</script>

<style scoped>
.digital-solutions {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  color: white;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  padding-top: 100px; 
}

.hero-banner {
  position: relative;
  height: 80vh;
  min-height: 500px;
  max-height: 800px;
  background-image: url('https://static.mercadonegro.pe/wp-content/uploads/2024/12/12115227/Marketing-digital-2025-1.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-bottom: 5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(30, 58, 138, 0.85));
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 2rem;
  max-width: 1400px;
  width: 100%;
  margin-top: 60px; /* Ajuste para el header */
}

.hero-text {
  max-width: 700px;
}

.hero-banner h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: white;
}

.highlight {
  background: linear-gradient(90deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  border-radius: 3px;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  line-height: 1.6;
  opacity: 0.9;
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

button {
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  white-space: nowrap;
}

.cta-primary {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.cta-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.content-section {
  padding: 4rem 0;
}

.alt-bg {
  background: rgba(15, 23, 42, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.section-container {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 4rem;
}

.reverse {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
  min-width: 300px;
  padding: 0 1.5rem;
}

.section-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #818cf8;
  margin-bottom: 1rem;
  background: rgba(129, 140, 248, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
}

.center {
  display: block;
  text-align: center;
  margin: 0 auto 1rem;
}

.text-content h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 700;
  line-height: 1.2;
}

.text-content p {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 2rem;
  color: #e2e8f0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.feature-list li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
}

.list-icon {
  width: 1.2rem;
  height: 1.2rem;
  color: #818cf8;
  margin-right: 0.7rem;
  flex-shrink: 0;
}

.stats-container {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

.tech-stack {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  background: rgba(129, 140, 248, 0.1);
  color: #a5b4fc;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(129, 140, 248, 0.2);
  white-space: nowrap;
}

.image-content {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  min-height: 300px;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, rgba(30, 58, 138, 0.3), rgba(15, 23, 42, 0.4));
}

.image-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.image-content:hover img {
  transform: scale(1.05);
}

.services-section {
  padding: 4rem 1rem;
  text-align: center;
  position: relative;
}

.services-header {
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
}

.services-header h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 700;
  line-height: 1.2;
}

.services-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  opacity: 0.9;
  color: #e2e8f0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.feature-item {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  text-align: center;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6, #a855f7);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-item:hover::before {
  opacity: 1;
}

.feature-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
}

.feature-icon-container {
  width: 60px;
  height: 60px;
  background: rgba(129, 140, 248, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  transition: all 0.3s ease;
}

.feature-item:hover .feature-icon-container {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  transform: scale(1.1);
}

.feature-icon {
  width: 1.8rem;
  height: 1.8rem;
  color: #a5b4fc;
  transition: all 0.3s ease;
}

.feature-item:hover .feature-icon {
  color: white;
}

.feature-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
  font-weight: 600;
}

.feature-item p {
  font-size: 1rem;
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  color: #e2e8f0;
}

.feature-hover-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  color: #a5b4fc;
  font-weight: 500;
  font-size: 0.95rem;
}

.feature-item:hover .feature-hover-content {
  opacity: 1;
  transform: translateY(0);
}

.feature-hover-indicator {
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.5rem;
  transition: all 0.3s ease;
}

.feature-item:hover .feature-hover-indicator {
  transform: translateX(5px);
}

.digital-solutions,
.section-container,
.hero-content,
.services-header,
.features-grid {
  max-width: 100%;
  box-sizing: border-box;
}

h1, h2, h3, p, .hero-subtitle, .services-subtitle {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* Ajustes para pantallas muy pequeñas */
@media (max-width: 420px) {
  .hero-banner {
    min-height: 320px;
    padding: 0;
  }
  .hero-content {
    padding: 0 0.5rem;
  }
  .section-container {
    padding: 0 0.5rem;
    gap: 1.2rem;
  }
  .text-content h2,
  .services-header h2 {
    font-size: 1.2rem;
  }
  .text-content p,
  .services-subtitle,
  .hero-subtitle {
    font-size: 0.95rem;
  }
  .feature-item {
    padding: 1rem 0.5rem;
    min-height: unset;
  }
  .feature-item h3 {
    font-size: 1rem;
  }
  .feature-item p {
    font-size: 0.9rem;
  }
  .tech-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
  button,
  .cta-primary,
  .cta-secondary {
    width: 100%;
    font-size: 0.95rem;
    padding: 0.8rem;
    margin: 0;
  }
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0;
  }
  .image-content {
    min-height: 150px;
  }
}

button,
.cta-primary,
.cta-secondary {
  max-width: 100%;
  box-sizing: border-box;
  white-space: normal;
  overflow-wrap: break-word;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .section-container {
    gap: 3rem;
  }
  
  .hero-banner {
    height: 70vh;
  }
  
  .hero-content {
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  .digital-solutions {
    padding-top: 70px;
  }
  
  .hero-banner {
    height: 60vh;
    min-height: 400px;
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .hero-content {
    text-align: center;
    margin-top: 40px;
  }
  
  .hero-text {
    margin: 0 auto;
  }
  
  .hero-cta {
    justify-content: center;
  }
  
  .section-container {
    flex-direction: column;
    gap: 2.5rem;
    padding: 0 1.5rem;
  }
  
  .reverse {
    flex-direction: column;
  }
  
  .text-content {
    text-align: center;
  }
  
  .stats-container {
    justify-content: center;
  }
  
  .image-content {
    width: 100%;
    min-height: 250px;
  }
  
  .services-section {
    padding: 3rem 0.5rem;
  }
}

@media (max-width: 576px) {
  .hero-banner {
    height: 70vh;
    min-height: 450px;
  }
  
  .hero-content {
    padding: 0 1.5rem;
  }
  
  .hero-cta {
    flex-direction: column;
    gap: 1rem;
  }
  
  button {
    width: 100%;
    padding: 0.9rem;
  }
  
  .content-section {
    padding: 3rem 0;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .feature-item {
    min-height: 220px;
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 400px) {
  .hero-banner h1 {
    font-size: 1.3rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .section-container {
    padding: 0 1rem;
  }
  
  .tech-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .feature-item h3 {
    font-size: 1.2rem;
  }
  
  .feature-item p {
    font-size: 0.95rem;
  }
}
</style>