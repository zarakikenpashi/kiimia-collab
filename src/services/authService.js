import { useAuthStore } from '../store/useAuthStore';
import { apiFetch } from './api';

export const register = async (data) => {
  const response = await apiFetch('/register', 'POST', data);
  
  // Auto-login après inscription
  if (response.token && response.user) {
    useAuthStore.getState().setToken(response.token);
    useAuthStore.getState().setUser(response.user);
  }
  
  return response;
};

export const login = async (data) => {
  const { token, user } = await apiFetch('/login', 'POST', data);
  useAuthStore.getState().setToken(token);
  useAuthStore.getState().setUser(user);
  return { token, user };
};

export const logout = async () => {
  try {
    const token = useAuthStore.getState().token;
    if (token) {
      await apiFetch('/logout', 'POST', null, token);
    }
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  } finally {
    // Nettoyer le store même en cas d'erreur
    useAuthStore.getState().logout();
  }
};

export const getCurrentUser = async () => {
  try {
    const token = useAuthStore.getState().token;
    console.log(token)
    if (!token) return null;
    
    const user = await apiFetch('/user', 'GET', null, token);
    useAuthStore.getState().setUser(user);
    return user;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error);
    useAuthStore.getState().logout();
    return null;
  }
};