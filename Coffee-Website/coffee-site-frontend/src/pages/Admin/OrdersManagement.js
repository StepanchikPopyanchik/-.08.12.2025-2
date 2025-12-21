import { useEffect, useState } from 'react';
import { getOrders, updateOrderStatus } from '../../services/adminApi';

function OrdersManagement() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await getOrders(token);
    setOrders(res.data);
  };

  const handleStatusChange = async (id, status) => {
    await updateOrderStatus(id, status, token);
    fetchOrders();
  };

  return (
    <div>
      <h2>Управление заказами</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>
            Заказ #{o.id} — пользователь: {o.userId} | Статус: {o.status}
            <button onClick={() => handleStatusChange(o.id, 'Выполнен')}>Выполнен</button>
            <button onClick={() => handleStatusChange(o.id, 'Отменен')}>Отменен</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersManagement;
