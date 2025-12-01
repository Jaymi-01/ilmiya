// src/components/PrivateRoute.jsx
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const { user } = useAuth();
  
  // Checks if user object exists and has isLoggedIn set to true
  return user && user.isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;