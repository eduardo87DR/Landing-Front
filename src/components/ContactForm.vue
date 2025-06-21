<template>
  <section class="contact" id="contact">
    <h2 class="contact-title">Contáctanos</h2>
    <form class="form">
      <div class="form-group">
        <input type="text" placeholder="Guillermo García Canul" required />
        <label>Nombre completo</label>
        <span class="focus-border"></span>
      </div>
      
      <div class="form-group">
        <input type="email" placeholder="guillermo.jesus.garcia.canul@gmail.com" required />
        <label>Correo electrónico</label>
        <span class="focus-border"></span>
      </div>

      <div class="form-group">
        <input type="tel" placeholder="+52 999 123 4567" required />
        <label>Teléfono</label>
        <span class="focus-border"></span>
      </div>
      
      <div class="form-group textarea-group">
        <textarea placeholder="Me gustaría saber más información sobre..." rows="5" required></textarea>
        <label>Tu mensaje</label>
        <span class="focus-border"></span>
      </div>
      
      <button type="submit" class="submit-btn">
        <span>Enviar mensaje</span>
        <svg width="24" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </form>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

.contact {
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f8faff, #e6f0ff);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(13, 71, 161, 0.15);
  max-width: 800px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.contact:hover {
  box-shadow: 0 12px 35px rgba(13, 71, 161, 0.2);
}

.contact-title {
  text-align: center;
  color: #0d47a1;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  border-radius: 3px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.form-group {
  position: relative;
}

.form-group label {
  position: absolute;
  top: -0.6rem;
  left: 0.8rem;
  font-size: 0.8rem;
  color: #0d47a1;
  background: #f8faff;
  padding: 0 5px;
  z-index: 2;
  transition: all 0.2s ease;
  pointer-events: none;
}

input, textarea {
  width: 100%;
  padding: 1.2rem;
  border-radius: 8px;
  border: 2px solid #d3e0f7;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  background: transparent;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #1976d2;
  outline: none;
}

input:focus + label,
input:not(:placeholder-shown) + label,
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
  top: -0.6rem;
  left: 0.8rem;
  font-size: 0.8rem;
  color: #0d47a1;
  background: #f8faff;
}

.focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  transition: width 0.4s ease;
}

input:focus ~ .focus-border,
textarea:focus ~ .focus-border {
  width: 100%;
}

.textarea-group {
  margin-bottom: 0.5rem;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: linear-gradient(90deg, #1976d2, #0d47a1);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  margin: 0.5rem auto 0;
  box-shadow: 0 4px 15px rgba(25, 118, 210, 0.3);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(25, 118, 210, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn svg {
  transition: transform 0.3s ease;
}

.submit-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .contact {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }
  
  .contact-title {
    font-size: 1.7rem;
  }
  
  .form {
    gap: 1.5rem;
  }
}
</style>