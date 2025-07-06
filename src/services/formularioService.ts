import axios from 'axios';

const API_BASE = 'http://localhost:3000/formulario'; 

export const fetchLeads = async () => {
  const response = await axios.get(`${API_BASE}/all`); 
  return response.data;
};
