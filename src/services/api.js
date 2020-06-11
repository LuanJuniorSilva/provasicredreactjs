import axios from 'axios';

const apiLogin = axios.create({
  baseURL: 'https://apitestedragon.herokuapp.com/',
});

export default apiLogin;
