<template>
  <section class="dashboard">
    <div class="dashboard-header">
      <h1>Panel de Control</h1>
      <p>Gestión centralizada de clientes y comunicaciones.</p>
    </div>

    <div class="dashboard-stats">
      <div class="card">
        <h2>Total de Contactos</h2>
        <p>--</p>
      </div>
      <div class="card">
        <h2>Usuarios Registrados</h2>
        <p>--</p>
      </div>
      <div class="card">
        <h2>Ordenar por Importancia</h2>
        <p>--</p>
      </div>
    </div>

    <div class="dashboard-messages">
      <h2>Mensajes Recientes</h2>
      <p class="placeholder">Aquí se mostrarán los leads recibidos próximamente.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// lógica pendiente para la obtención de datos del dashboard
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  background-color: #dbf3fa;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  color: #0d47a1;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.dashboard-header p {
  color: #555;
  font-size: 1.1rem;
}

.dashboard-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  flex: 1 1 250px;
}

.card h2 {
  color: #1976d2;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.dashboard-messages {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
}

.dashboard-messages h2 {
  color: #0d47a1;
  margin-bottom: 1rem;
}

.placeholder {
  color: #888;
  font-style: italic;
}
</style>
 