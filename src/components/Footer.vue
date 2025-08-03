<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <CpuChipIcon class="brand-icon" />
        <span class="brand-name">Morphix</span>
        <span class="brand-suffix">Digital Solutions</span>
      </div>
      <p class="copyright">
        <span>&copy; 2025 Morphix Soluciones Digitales. Todos los derechos reservados.</span>
        <span class="copyright-icons">
          <ShieldCheckIcon class="icon" />
          <LockClosedIcon class="icon" />
        </span>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { CpuChipIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
.footer {
  width: 100%;
  background: rgba(15, 23, 42, 0.98);
  color: #e2e8f0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 2rem 0 1rem;
}

.footer-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.brand-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #818cf8;
}

.brand-name {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
}

.brand-suffix {
  color: #e2e8f0;
  font-weight: 500;
  opacity: 0.9;
}

.copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.8;
  text-align: center;
}

.copyright-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.icon {
  width: 1.1rem;
  height: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 1.5rem;
    gap: 1.25rem;
  }
  
  .footer-brand {
    font-size: 1.1rem;
  }
  
  .copyright {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 0;
  }
  
  .footer-content {
    padding: 0 1rem;
    gap: 1rem;
  }
  
  .brand-suffix {
    display: none;
  }
  
  .copyright {
    font-size: 0.8rem;
  }
  
  .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>