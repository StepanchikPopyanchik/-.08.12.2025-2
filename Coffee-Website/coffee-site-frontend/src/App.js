import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Admin/Dashboard';

<Route path="/admin" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
