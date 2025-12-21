import { useEffect, useState } from 'react';
import { getUsers, getOrders } from '../../services/adminApi';
import UsersManagement from './UsersManagement';
import OrdersManagement from './OrdersManagement';
import ProductsManagement from './ProductsManagement';

function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');

    getUsers(token).then(res => setUsersCount(res.data.length));
    getOrders(token).then(res => setOrdersCount(res.data.length));
  }, []);

  return (
    <div>
      <h1>Админ-панель</h1>
      <div>
        <p>Всего пользователей: {usersCount}</p>
        <p>Всего заказов: {ordersCount}</p>
      </div>
      <UsersManagement />
      <ProductsManagement />
      <OrdersManagement />
    </div>
  );
}

export default Dashboard;
