<template>
  <section class="welcome" id="welcome">
    <div class="welcome-container">
      <h1>Bienvenido a Nuestra Plataforma</h1>
      <p class="main-text">Ofrecemos soluciones efectivas y profesionales para tus necesidades digitales.</p>
    </div>
  </section>
</template>

<style scoped>
.welcome {
  padding: 3rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1a3dc7, #2aa8c9);
  color: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(26, 61, 199, 0.3);
  margin: 0 auto 4rem;
  max-width: 1000px;
  width: 90%;
}

.welcome-container {
  max-width: 700px;
  margin: 0 auto;
}

.welcome h1 {
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
}

.main-text {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  opacity: 0.95;
  line-height: 1.5;
}

.additional-text {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .welcome {
    padding: 3.5rem 1.5rem;
    width: 95%;
  }
  
  .welcome h1 {
    font-size: 2rem;
  }
  
  .main-text {
    font-size: 1.1rem;
  }
  
  .additional-text {
    font-size: 1rem;
  }
}
</style>