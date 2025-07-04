<template>
  <div class="dashboard-view">
    <h1>Dashboard</h1>
    <p>¡Bienvenido al Panel de Control de CRM!</p>
    <p>Aquí puedes gestionar tus relaciones con los clientes de forma eficaz.</p>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

const logout = () => {
  auth.logout();
};
</script>

<style scoped>
.dashboard-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Asegura que ocupe toda la altura de la ventana */
  background-color: #f0f4f8; /* Un color de fondo azul muy suave */
  font-family: 'Arial', sans-serif; /* Fuente más legible */
  color: #333; /* Color de texto oscuro para buen contraste */
  padding: 20px;
  box-sizing: border-box; /* Incluye el padding en el ancho y alto total */
}

h1 {
  color: #2c3e50; /* Un azul oscuro para el título */
  margin-bottom: 20px;
  font-size: 2.5em; /* Tamaño de fuente más grande para el título */
}

p {
  margin-bottom: 10px;
  font-size: 1.1em; /* Tamaño de fuente ligeramente más grande para los párrafos */
  text-align: center; /* Centra el texto de los párrafos */
  max-width: 600px; /* Limita el ancho de los párrafos para mejor legibilidad */
  line-height: 1.6; /* Espaciado de línea para mejor legibilidad */
}

button {
  background-color: #42b983; /* Un verde amigable */
  color: white;
  border: none;
  border-radius: 8px; /* Bordes más redondeados */
  padding: 12px 25px; /* Más padding para un botón más grande */
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Transiciones suaves */
  margin-top: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

button:hover {
  background-color: #36a071; /* Un verde un poco más oscuro al pasar el ratón */
  transform: translateY(-2px); /* Efecto ligero de elevación */
}

button:active {
  transform: translateY(0); /* Vuelve a la posición original al hacer clic */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra más pequeña al hacer clic */
}
</style>
