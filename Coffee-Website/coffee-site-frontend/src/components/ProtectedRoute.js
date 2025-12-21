import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/login" />;

  try {
    const decoded = jwt_decode(token);
    if (decoded.role !== 'admin') return <Navigate to="/" />;
  } catch {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
