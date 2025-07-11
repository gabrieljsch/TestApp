import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001'
});

export const getMessage = () => API.get('/api/hello');
