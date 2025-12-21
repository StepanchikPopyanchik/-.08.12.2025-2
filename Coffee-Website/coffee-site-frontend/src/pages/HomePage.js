import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Добро пожаловать в Coffee Shop</h1>
      <nav>
        <Link to="/products">Товары</Link> | 
        <Link to="/login">Вход</Link> | 
        <Link to="/register">Регистрация</Link>
      </nav>
    </div>
  );
}

export default HomePage;
