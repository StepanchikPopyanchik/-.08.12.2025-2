import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../../services/adminApi';

function UsersManagement() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getUsers(token);
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id, token);
    fetchUsers();
  };

  return (
    <div>
      <h2>Управление пользователями</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.username} ({u.email}) — роль: {u.role} 
            <button onClick={() => handleDelete(u.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersManagement;
