import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // наш бэкенд

// Регистрация
export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);

// Логин
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);

// Получение товаров
export const getProducts = () => axios.get(`${API_URL}/products`);

// Создание товара (только для админа)
export const createProduct = (data, token) => 
  axios.post(`${API_URL}/products`, data, { headers: { Authorization: `Bearer ${token}` } });
