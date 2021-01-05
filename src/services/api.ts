import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.glitch.me',
});

export default api;
