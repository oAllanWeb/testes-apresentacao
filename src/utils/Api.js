import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};


const ax = () => axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  timeout: 50000,
  headers,
});

const Api = ax();

Api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    return error.response.status === 404 ? { error: 'Não foi possível acessar o servidor!' } : { error: error.response.data };
  }
  return { error: 'Não foi possível acessar o servidor!' };
});

export default Api;