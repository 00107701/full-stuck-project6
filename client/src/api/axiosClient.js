import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const raw = localStorage.getItem('user');

  if (raw) {
    try {
      const saved = JSON.parse(raw);
      const token = saved.token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      console.log('localStorage user is invalid');
    }
  }

  return config;
});

export default api;