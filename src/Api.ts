import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://new-portfolio-api.onrender.com/',
});

export default instance;
