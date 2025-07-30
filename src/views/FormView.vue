<template>
  <main class="form-view">
    <div class="form-wrapper">
      <ContactForm />
    </div>
  </main>
</template>

<style scoped>
.form-view {
  padding: 0;
  margin: 0 auto;
  width: 100%;
  min-height: calc(150vh - 120px); 
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-wrapper {
  width: 100%;
  margin: 0 auto;
  
}

/* Media Queries para responsividad */
@media (max-width: 1200px) {
  .form-wrapper {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 992px) {
  .form-view {
    min-height: calc(100vh - 110px);
  }
  
  .form-wrapper {
    padding: 1.75rem 1.25rem;
  }
}

@media (max-width: 768px) {
  .form-view {
    min-height: calc(100vh - 100px);
    align-items: flex-start;
    padding-top: 1rem;
  }
  
  .form-wrapper {
    padding: 1.5rem 1rem;
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .form-view {
    min-height: calc(100vh - 90px);
  }
  
  .form-wrapper {
    padding: 1.25rem 0.75rem;
  }
}

@media (max-width: 400px) {
  .form-wrapper {
    padding: 1rem 0.01rem;
  }
}
</style>


<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>
