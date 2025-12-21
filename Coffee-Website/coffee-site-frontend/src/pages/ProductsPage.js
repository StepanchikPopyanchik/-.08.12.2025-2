import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data))
                 .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Наши товары</h2>
      {products.length === 0 ? <p>Товары не найдены</p> : (
        <ul>
          {products.map(p => (
            <li key={p.id}>
              <strong>{p.name}</strong> — {p.description} | Цена: {p.price} ₽
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsPage;
