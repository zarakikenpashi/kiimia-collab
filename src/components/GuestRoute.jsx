import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

function GuestRoute({ children }) {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated) {
    // Rediriger selon le rôle
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    }
    if (user?.role === 'company') {
      return <Navigate to="/company/dashboard" replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children;
}

export default GuestRoute;