<template>
  <main class="form-view">
    <div class="form-wrapper">
      <ContactForm />
    </div>
  </main>
</template>

<style scoped>
.form-view {
  padding: 2rem;
  margin: 0 auto;
  max-width: none; 
  width: 800px; 
  box-sizing: border-box;
}

.form-wrapper {
  width: 100%;
  margin: 0 auto;
  
}
</style>


<script setup>
// import WelcomeSection from '../components/WelcomeSection.vue'
import ContactForm from '../components/ContactForm.vue'
</script>
