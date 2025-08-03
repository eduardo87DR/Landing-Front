<template>
  <main class="home-view">
    <WelcomeSection />
  </main>
</template>

<script setup>
import WelcomeSection from '../components/WelcomeSection.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
  min-height: calc(100vh - 120px); 
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1200px) {
  .home-view {
    min-height: calc(100vh - 110px);
  }
}

@media (max-width: 992px) {
  .home-view {
    min-height: calc(100vh - 100px);
  }
}

@media (max-width: 768px) {
  .home-view {
    min-height: calc(100vh - 90px);
    align-items: flex-start;
    padding-top: 1.5rem;
  }
}

@media (max-width: 576px) {
  .home-view {
    min-height: calc(100vh - 80px);
    padding-top: 1rem;
  }
}
</style>