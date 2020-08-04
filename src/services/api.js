import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.ahgora.com.br',
});

export default api;