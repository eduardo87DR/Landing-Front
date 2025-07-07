import axios from 'axios';

const API_BASE = 'https://thinkguille.space/formulario'; 

export const fetchLeads = async () => {
  const response = await axios.get(`${API_BASE}/all`); 
  return response.data;
};
