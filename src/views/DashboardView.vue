<template>
  <section class="dashboard">
    <div class="dashboard-header">
      <h1>Panel de Control</h1>
      <p>Gestión centralizada de clientes y comunicaciones.</p>
    </div>

    <div class="dashboard-stats">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="index"
        :style="{ 'animation-delay': `${index * 0.1}s` }"
      >
        <h2>{{ card.title }}</h2>
        <p>{{ card.value }}</p>
      </div>
    </div>

    <div class="dashboard-messages">
      <div class="messages-header">
        <h2>Mensajes Recibidos</h2>
        <div class="sort-controls">
          <select v-model="sortOption" @change="sortLeads">
            <option value="recent">Más recientes primero</option>
            <option value="oldest">Más antiguos primero</option>
            <option value="important">Más importantes primero</option>
            <option value="unread">No leídos primero</option>
          </select>
        </div>
      </div>
      
      <div v-if="paginatedLeads.length > 0" class="messages-list">
        <div 
          v-for="lead in paginatedLeads" 
          :key="lead.id" 
          class="message-card"
          :class="{
            'unread': !lead.leido,
            'important': lead.importante,
            [lead.estado]: true
          }"
        >
          <div class="message-header">
            <div class="sender-info">
              <svg class="icon" viewBox="0 0 24 24" v-if="!lead.leido">
                <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
              </svg>
              <svg class="icon" viewBox="0 0 24 24" v-else>
                <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
              </svg>
              <h3>{{ lead.nombre_completo || 'Sin nombre' }}</h3>
              <span class="tag" :class="lead.estado">{{ estadoLabels[lead.estado] }}</span>
              <svg class="icon important-icon" viewBox="0 0 24 24" v-if="lead.importante">
                <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
              </svg>
            </div>
            <div class="message-meta">
              <span class="date">{{ formatDate(lead.fecha) }}</span>
              <div class="message-actions">
                <button 
                  class="action-btn" 
                  @click="toggleImportant(lead)"
                  :title="lead.importante ? 'Quitar importancia' : 'Marcar como importante'"
                >
                  <svg class="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" :class="{ 'important': lead.importante }" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
                  </svg>
                </button>
                <select v-model="lead.estado" @change="updateLeadStatus(lead)" class="status-select">
                  <option value="nuevo">Nuevo</option>
                  <option value="contactado">Contactado</option>
                  <option value="descartado">Descartado</option>
                </select>
                <button 
                  class="action-btn" 
                  @click="markAsRead(lead)"
                  title="Marcar como leído"
                  v-if="!lead.leido"
                >
                  <svg class="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div class="message-content">
            <div class="contact-info">
              <div class="contact-item">
                <svg class="icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
                <a :href="`mailto:${lead.correo}`">{{ lead.correo || 'Sin correo' }}</a>
              </div>
              <div class="contact-item" v-if="lead.telefono">
                <svg class="icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
                <a :href="`tel:${lead.telefono}`">{{ lead.telefono }}</a>
              </div>
            </div>
            
            <div class="message-text">
              <p>{{ lead.mensaje || 'Sin mensaje' }}</p>
            </div>
          </div>
        </div>

        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">
            <svg class="icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
            Anterior
          </button>
          <span>Página {{ currentPage }} de {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">
            Siguiente
            <svg class="icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
        </div>
      </div>
      <p v-else class="placeholder">No se han recibido leads válidos aún.</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { fetchLeads } from '@/services/formularioService'

type LeadEstado = 'nuevo' | 'contactado' | 'descartado'
type Lead = {
  id: string
  nombre_completo?: string
  correo?: string
  telefono?: string
  mensaje?: string
  fecha?: string
  leido?: boolean
  importante?: boolean
  estado?: LeadEstado
}

const leads = ref<Lead[]>([])
const sortOption = ref('recent')
const cards = ref([
  { title: 'Total de Contactos', value: '--' },
  { title: 'Leads Nuevos', value: '--' },
  { title: 'Leads Contactados', value: '--' },
  { title: 'Leads Descartados', value: '--' }
])
const savingState = ref(false)

const estadoLabels: Record<LeadEstado, string> = {
  nuevo: 'Nuevo',
  contactado: 'Contactado',
  descartado: 'Descartado'
}

const currentPage = ref(1)
const pageSize = 5

function initializeLead(lead: any): Lead {
  const savedLead = localStorage.getItem(`lead_${lead.id}`)
  const savedData = savedLead ? JSON.parse(savedLead) : {}

  return {
    ...lead,
    leido: savedData.leido ?? lead.leido ?? false,
    importante: savedData.importante ?? lead.importante ?? false,
    estado: (savedData.estado ?? lead.estado ?? 'nuevo') as LeadEstado,
    fecha: lead.fecha || new Date().toISOString()
  }
}

async function saveLeadState(lead: Lead) {
  savingState.value = true
  const { id, leido, importante, estado } = lead
  localStorage.setItem(`lead_${id}`, JSON.stringify({ leido, importante, estado }))
  
  await new Promise(resolve => setTimeout(resolve, 300))
  savingState.value = false
}

const validLeads = computed(() =>
  leads.value
    .filter(lead => lead?.nombre_completo?.trim() || 
                    lead?.correo?.trim() || 
                    lead?.telefono?.trim() || 
                    lead?.mensaje?.trim())
    .map(initializeLead)
)

const sortedLeads = computed(() => {
  const leadsCopy = [...validLeads.value]
  
  switch(sortOption.value) {
    case 'recent':
      return leadsCopy.sort((a, b) => new Date(b.fecha!).getTime() - new Date(a.fecha!).getTime())
    case 'oldest':
      return leadsCopy.sort((a, b) => new Date(a.fecha!).getTime() - new Date(b.fecha!).getTime())
    case 'important':
      return leadsCopy.sort((a, b) => (b.importante === a.importante) 
        ? new Date(b.fecha!).getTime() - new Date(a.fecha!).getTime()
        : b.importante ? 1 : -1)
    case 'unread':
      return leadsCopy.sort((a, b) => (a.leido === b.leido)
        ? new Date(b.fecha!).getTime() - new Date(a.fecha!).getTime()
        : a.leido ? 1 : -1)
    default:
      return leadsCopy
  }
})

const totalPages = computed(() => Math.ceil(sortedLeads.value.length / pageSize))

const paginatedLeads = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return sortedLeads.value.slice(start, start + pageSize)
})

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

function sortLeads() {
  currentPage.value = 1
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return new Date(dateString).toLocaleDateString('es-ES', options)
}

async function toggleImportant(lead: Lead) {
  lead.importante = !lead.importante
  await saveLeadState(lead)
  updateStats()
}

async function markAsRead(lead: Lead) {
  lead.leido = true
  await saveLeadState(lead)
  updateStats()
}

async function updateLeadStatus(lead: Lead) {
  if (!['nuevo', 'contactado', 'descartado'].includes(lead.estado!)) {
    lead.estado = 'nuevo'
  }
  await saveLeadState(lead)
  updateStats()
}

function updateStats() {
  cards.value[0].value = validLeads.value.length.toString()
  cards.value[1].value = validLeads.value.filter(l => l.estado === 'nuevo').length.toString()
  cards.value[2].value = validLeads.value.filter(l => l.estado === 'contactado').length.toString()
  cards.value[3].value = validLeads.value.filter(l => l.estado === 'descartado').length.toString()
}

onMounted(async () => {
  try {
    const data = await fetchLeads()
    leads.value = data.map(lead => initializeLead(lead))
    updateStats()
  } catch (error) {
    console.error('Error al cargar leads:', error)
  }
})

watch(leads, (newLeads) => {
  newLeads.forEach(lead => {
    if (lead.id) {
      saveLeadState(lead)
    }
  })
}, { deep: true })
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.dashboard-header h1 {
  color: rgba(255, 255, 255, 0.95);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  display: inline-block;
}

.dashboard-header h1::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #64b5f6, #2196f3);
  border-radius: 3px;
}

.dashboard-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.dashboard-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.card {
  background: rgba(30, 45, 70, 0.6);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  text-align: center;
  flex: 1 1 280px;
  min-width: 250px;
  max-width: 320px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  opacity: 0;
  transform: translateY(30px);
  animation: cardEnter 0.6s ease-out forwards;
}

@keyframes cardEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.1);
  background: rgba(35, 55, 85, 0.7);
}

.card h2 {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
}

.card h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: rgba(100, 181, 246, 0.6);
}

.card p {
  font-size: 2rem;
  font-weight: 700;
  color: #64b5f6;
  margin-top: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dashboard-messages {
  background: rgba(30, 45, 70, 0.6);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: fadeIn 0.8s 0.3s ease-out forwards;
  opacity: 0;
}

.messages-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.sort-controls select {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sort-controls select:hover {
  background: rgba(255, 255, 255, 0.15);
}

.sort-controls select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.5);
}

.dashboard-messages h2 {
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.dashboard-messages h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #64b5f6, #2196f3);
  border-radius: 3px;
}

.placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  line-height: 1.6;
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.message-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  border-radius: 8px;
  color: #fff;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.message-card:hover {
  transform: translateY(-4px);
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
}

.message-card.unread {
  border-left: 4px solid #64b5f6;
  background-color: rgba(100, 181, 246, 0.1);
}

.message-card.important {
  border-left: 4px solid #ff9800;
  background-color: rgba(255, 152, 0, 0.1);
}

.message-card.nuevo {
  border-left: 4px solid #4caf50;
  background-color: rgba(76, 175, 80, 0.05);
}

.message-card.contactado {
  border-left: 4px solid #2196f3;
  background-color: rgba(33, 150, 243, 0.05);
}

.message-card.descartado {
  border-left: 4px solid #f44336;
  background-color: rgba(244, 67, 54, 0.05);
  opacity: 0.9;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.sender-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.sender-info h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.tag.nuevo {
  background-color: rgba(76, 175, 80, 0.2);
  color: #4caf50;
}

.tag.contactado {
  background-color: rgba(33, 150, 243, 0.2);
  color: #2196f3;
}

.tag.descartado {
  background-color: rgba(244, 67, 54, 0.2);
  color: #f44336;
}

.message-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.date {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.message-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.action-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.status-select {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(129, 140, 248, 0.3);
  color: white;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23818cf8'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.2rem;
  padding-right: 2rem;
}

.status-select:hover {
  background-color: rgba(30, 41, 59, 0.9);
  border-color: rgba(129, 140, 248, 0.5);
}

.status-select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(129, 140, 248, 0.3);
  border-color: #818cf8;
}

.status-select option {
  background: rgba(15, 23, 42, 0.95);
  color: white;
  padding: 0.5rem;
}

.sort-controls select {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(129, 140, 248, 0.3);
  color: white;
  padding: 0.5rem 1rem 0.5rem 0.75rem;
  border-radius: 6px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23818cf8'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.2rem;
  padding-right: 2rem;
}

.sort-controls select:hover {
  background-color: rgba(30, 41, 59, 0.9);
  border-color: rgba(129, 140, 248, 0.5);
}

.sort-controls select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(129, 140, 248, 0.3);
  border-color: #818cf8;
}

.sort-controls select option {
  background: rgba(15, 23, 42, 0.95);
  color: white;
}
.message-content {
  margin-top: 1rem;
}

.contact-info {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.contact-item a {
  color: #64b5f6;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: #42a5f5;
  text-decoration: underline;
}

.message-text {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.6;
  white-space: pre-wrap;
}

.message-text p {
  margin: 0;
}

.icon {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  fill: currentColor;
}

.important-icon {
  color: #ff9800;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.pagination button {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination button:hover:not(:disabled) {
  background-color: #1e88e5;
}

.pagination button:disabled {
  background-color: #90caf9;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .dashboard {
    padding: 1.5rem;
  }
  
  .dashboard-stats {
    gap: 1.5rem;
  }
  
  .card {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 1.5rem;
  }
  
  .dashboard-messages {
    padding: 1.5rem;
  }
  
  .message-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .message-meta {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 400px) {
  .dashboard {
    padding: 1rem;
  }

  .dashboard-header {
    margin-bottom: 2rem;
  }

  .dashboard-header h1 {
    font-size: 1.8rem;
  }

  .dashboard-header p {
    font-size: 0.95rem;
  }

  .dashboard-stats {
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .card {
    min-width: 100%;
    padding: 1.5rem 1rem;
    border-radius: 10px;
  }

  .card h2 {
    font-size: 1.1rem;
  }

  .card p {
    font-size: 1.5rem;
  }

  .dashboard-messages {
    padding: 1.25rem;
    border-radius: 10px;
  }

  .messages-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .messages-header h2 {
    font-size: 1.3rem;
  }

  .sort-controls select {
    width: 100%;
  }

  .message-card {
    padding: 1.25rem;
  }

  .sender-info {
    gap: 0.5rem;
  }

  .sender-info h3 {
    font-size: 1rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tag {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
  }

  .message-meta {
    width: 100%;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  .date {
    font-size: 0.8rem;
  }

  .contact-info {
    gap: 1rem;
    flex-direction: column;
  }

  .contact-item {
    font-size: 0.85rem;
  }

  .message-text {
    padding: 0.75rem;
    font-size: 0.9rem;
  }

  .status-select {
    padding: 0.35rem 0.6rem;
    font-size: 0.8rem;
    padding-right: 1.8rem;
  }

  .action-btn {
    padding: 0.2rem;
  }

  .pagination {
    gap: 0.75rem;
  }

  .pagination button {
    padding: 0.6rem;
    font-size: 0.9rem;
  }

  .message-text p {
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .sender-info {
    width: 100%;
    justify-content: space-between;
  }

  .contact-item a {
    display: inline-block;
    max-width: calc(100% - 30px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

</style>