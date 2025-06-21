<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="copyright"> MiLanding - &copy; 2025  IDYGS93. Todos los derechos reservados. </p>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.footer {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  color: white;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Montserrat', sans-serif;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  text-align: center;
}

.copyright {
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>