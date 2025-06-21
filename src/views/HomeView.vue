<template>
  <main class="home">
    <WelcomeSection />
    <ContactForm />
  </main>
</template>

<script setup>
import WelcomeSection from '../components/WelcomeSection.vue'
import ContactForm from '../components/ContactForm.vue'
</script>

<style scoped>
.home {
  padding: 2rem;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
}
</style>