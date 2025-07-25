import axios from 'axios';

const baseURL =
  import.meta.env.PROD
    ? 'https://thinkguille.space'
    : 'http://localhost:3000';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);
export default apiClient;