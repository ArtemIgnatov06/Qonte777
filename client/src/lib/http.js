// src/lib/http.js
import axios from 'axios';

// CRA: переменные окружения только с префиксом REACT_APP_
// Можно ещё задать window.API_BASE в index.html как рантайм-фоллбек.
const API_BASE =
  process.env.REACT_APP_API ||
  window.API_BASE ||
  ''; // если пусто — будет бить по текущему домену

export const http = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // нужны куки (JWT) кросс-доменом
});

// опционально: единая обработка ошибок
http.interceptors.response.use(
  (r) => r,
  (err) => Promise.reject(err)
);
