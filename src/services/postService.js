import { apiFetch } from './api';
import { useAuthStore } from '../stores/useAuthStore';

const getToken = () => useAuthStore.getState().token;

export const fetchPosts = async () => {
  return apiFetch('/posts', 'GET', null, getToken());
};

export const createPost = async (data) => {
  return apiFetch('/posts', 'POST', data, getToken());
};

export const updatePost = async (id, data) => {
  return apiFetch(`/posts/${id}`, 'PUT', data, getToken());
};

export const deletePost = async (id) => {
  return apiFetch(`/posts/${id}`, 'DELETE', null, getToken());
};