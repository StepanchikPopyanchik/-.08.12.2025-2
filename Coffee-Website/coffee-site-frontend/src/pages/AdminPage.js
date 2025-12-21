import { useState } from 'react';
import { createProduct } from '../services/api';

function AdminPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await createProduct({ name, description, price: parseFloat(price), stock: parseInt(stock) }, token);
      setMessage('Товар добавлен');
      setName(''); setDescription(''); setPrice(''); setStock('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Ошибка добавления товара');
    }
  };

  return (
    <div>
      <h2>Админ панель</h2>
      <form onSubmit={handleAddProduct}>
        <input placeholder="Название" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Описание" value={description} onChange={e => setDescription(e.target.value)} required />
        <input type="number" placeholder="Цена" value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="number" placeholder="Количество" value={stock} onChange={e => setStock(e.target.value)} required />
        <button type="submit">Добавить товар</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminPage;
