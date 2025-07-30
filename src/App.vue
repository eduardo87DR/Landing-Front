<template>
  <div id="app">
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
}

.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.main-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  width: 100%;
  flex: 1;
  display: flex;
}

.content-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  flex: 1;
}

/* Ajustes responsivos para el contenedor principal */
@media (max-width: 1200px) {
  .content-container {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 50px; /* Ajusta según altura del header */
  }
}

@media (max-width: 576px) {
  .main-content {
    padding-top: 30px; /* Ajusta según altura del header */
  }
}
</style>