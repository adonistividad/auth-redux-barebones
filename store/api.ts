import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // Update with your API URL
});

export default instance;
