import { useEffect, useState } from 'react';
import { getProducts, createProduct, deleteProduct } from '../../services/adminApi';

function ProductsManagement() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await getProducts(token);
    setProducts(res.data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await createProduct({ name, description, price: parseFloat(price), stock: parseInt(stock) }, token);
    setName(''); setDescription(''); setPrice(''); setStock('');
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id, token);
    fetchProducts();
  };

  return (
    <div>
      <h2>Управление товарами</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Название" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Описание" value={description} onChange={e => setDescription(e.target.value)} required />
        <input type="number" placeholder="Цена" value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="number" placeholder="Количество" value={stock} onChange={e => setStock(e.target.value)} required />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} — {p.description} | Цена: {p.price} | Кол-во: {p.stock}
            <button onClick={() => handleDelete(p.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsManagement;
