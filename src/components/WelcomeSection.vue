<template>
  <section class="digital-solutions" id="soluciones-digitales">
    <div class="digital-solutions-container">
      <div class="content-wrapper">
        <h1>Transforma tu Negocio con Soluciones Digitales</h1>
        <p class="main-text">Potenciamos tu presencia digital con herramientas innovadoras diseñadas para el crecimiento empresarial.</p>
        
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">📈</div>
            <h3>E-commerce Integrado</h3>
            <p>Vende en línea con nuestra plataforma todo-en-uno</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🤖</div>
            <h3>Automatización</h3>
            <p>Optimiza procesos con inteligencia artificial</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📱</div>
            <h3>Apps Móviles</h3>
            <p>Llega a tus clientes en cualquier dispositivo</p>
          </div>
        </div>
        
        <button class="cta-button">Solicita una Demo Gratis</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.digital-solutions {
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(145deg, #0f172a, #1e3a8a);
  color: white;
  border-radius: 20px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  margin: 0 auto 5rem;
  max-width: 1200px;
  width: 90%;
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
}

@keyframes pulse {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.digital-solutions-container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  padding: 2rem;
}

.digital-solutions h1 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.main-text {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #e2e8f0;
}

.feature-item p {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.5;
}

.cta-button {
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
  margin-top: 1rem;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.6);
  background: linear-gradient(90deg, #2563eb, #4f46e5);
}

@media (max-width: 768px) {
  .digital-solutions {
    padding: 3rem 1.5rem;
    width: 95%;
    border-radius: 16px;
  }
  
  .digital-solutions h1 {
    font-size: 2.2rem;
  }
  
  .main-text {
    font-size: 1.2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .feature-item {
    padding: 1.5rem 1rem;
  }
  
  .cta-button {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
}
</style>