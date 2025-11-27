import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

function GuestRoute({ children }) {
  const { isAuthenticated, user } = useAuthStore();



  if (isAuthenticated && user) {
    if (user.role == 'admin') {
      return <Navigate to="/admin" replace />;
    }
    
    if (user.role == 'company') {
      return <Navigate to="/company" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
}

export default GuestRoute;