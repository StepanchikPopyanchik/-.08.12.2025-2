import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const getUsers = (token) => axios.get(`${API_URL}/users`, { headers: { Authorization: `Bearer ${token}` } });
export const deleteUser = (id, token) => axios.delete(`${API_URL}/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });

export const getProducts = (token) => axios.get(`${API_URL}/products`, { headers: { Authorization: `Bearer ${token}` } });
export const createProduct = (data, token) => axios.post(`${API_URL}/products`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteProduct = (id, token) => axios.delete(`${API_URL}/products/${id}`, { headers: { Authorization: `Bearer ${token}` } });

export const getOrders = (token) => axios.get(`${API_URL}/orders`, { headers: { Authorization: `Bearer ${token}` } });
export const updateOrderStatus = (id, status, token) => axios.put(`${API_URL}/orders/${id}`, { status }, { headers: { Authorization: `Bearer ${token}` } });
