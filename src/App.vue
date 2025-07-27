<template>
  <div id="app">
    <!-- Header ocupa todo el ancho visual -->
    <div class="full-width">
      <Header />
    </div>

    <main class="main-content">
      <div class="content-wrapper">
        <div class="content-container">
          <router-view />
        </div>
      </div>
    </main>

    <!-- Footer ocupa todo el ancho visual -->
    <div class="full-width">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(145deg, #0f172a, #1e3a8a);
  color: #fff;
  line-height: 1.6;
  overflow-x: hidden;
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
}

/* Este clase fuerza que header/footer se expandan al 100vw */
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* El contenido principal sigue centrado */
.main-content {
  flex: 1;
  width: 100%;
}

.content-wrapper {
  width: 100%;
  background: inherit;
}

.content-container {
  width: 100%;
  max-width: 1200px;
  min-width: 320px;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
}

/* Responsive spacing */
@media (max-width: 1200px) {
  .content-container {
    padding: 1.5rem;
  }
}

@media (max-width: 992px) {
  .content-container {
    padding: 1.25rem;
  }
}

@media (max-width: 768px) {
  .content-container {
    padding: 1rem;
  }
}

@media (max-width: 576px) {
  .content-container {
    padding: 0.75rem;
  }
}
</style>
