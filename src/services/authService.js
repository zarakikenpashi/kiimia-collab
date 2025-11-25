import { useAuthStore } from '../store/useAuthStore';
import { apiFetch } from './api';

export const register = async (data) => {
  return apiFetch('/register', 'POST', data);
};

export const login = async (data) => {
  const { token, user } = await apiFetch('/login', 'POST', data);
  useAuthStore.getState().setToken(token);
  useAuthStore.getState().setUser(user);
  return { token, user };
};

export const logout = async () => {
  const token = useAuthStore.getState().token;
  await apiFetch('/logout', 'POST', null, token);
  useAuthStore.getState().logout();
};