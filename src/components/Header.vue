<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">Landing Page - IDYGS93</div>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/form">Contactanos</router-link>
        <router-link to="/login">Iniciar Sesión</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.header {
  right: 50%;
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Montserrat', sans-serif;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: linear-gradient(90deg, #0d47a1, #1976d2);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: color 0.3s;
}

nav a:hover {
  color: #bbdefb;
}
</style>