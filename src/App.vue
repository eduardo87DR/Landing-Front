<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <div class="content-wrapper">
        <div class="content-container">
          <router-view />
        </div>
      </div>
    </main>
    <Footer />
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
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
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

.header, .footer {
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
}

/* Media Queries optimizadas */
@media (max-width: 1200px) {
  .content-container {
    padding: 1.5rem;
    max-width: 100%; 
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

.router-view > * {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box;
}
</style>