<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="copyright">MiLanding - &copy; 2025 IDYGS93. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.footer {
  width: 100%;
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  color: white;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Montserrat', sans-serif;
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  text-align: center;
}

.copyright {
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
}

/* Media Queries */
@media (max-width: 768px) {
  .footer-content {
    padding: 0.75rem 1rem;
  }
  
  .copyright {
    font-size: 0.85rem;
  letter-spacing: normal;
  line-height: 1.4;
  padding: 0.5rem 0;
  word-break: break-word;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 0.5rem;
  }
  
  .copyright {
    font-size: 0.75rem;
  }
}
</style>