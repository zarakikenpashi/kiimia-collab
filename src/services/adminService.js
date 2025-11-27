// src/services/adminService.js

import { useAuthStore } from "../store/useAuthStore";
import { apiFetch } from "./api";

/**
 * CREATE — Créer un administrateur
 * @param {FormData | Object} data
 */
export const createAdministrator = async (data) => {
  const token = useAuthStore.getState().token;

  const isFormData = data instanceof FormData;

  const response = await apiFetch(
    "/admin/create",
    "POST",
    data,
    token,
    isFormData ? true : false
  );

  return response;
};


/**
 * READ — Récupérer tous les administrateurs
 */
export const getAdministrators = async () => {
  const token = useAuthStore.getState().token;

  const response = await apiFetch("/admin/liste", "GET", null, token);
  return response;
};


/**
 * READ — Récupérer un administrateur par ID
 */
export const getAdministratorById = async (id) => {
  const token = useAuthStore.getState().token;

  const response = await apiFetch(`/admin/detail/${id}`, "GET", null, token);
  return response;
};


/**
 * UPDATE — Modifier un administrateur
 * @param {string} id
 * @param {FormData | Object} data
 */
export const updateAdministrator = async (id, data) => {
  const token = useAuthStore.getState().token;

  const isFormData = data instanceof FormData;

  const response = await apiFetch(
    `/admin/update/${id}`,
    "POST",
    data,
    token,
    isFormData ? true : false
  );

  return response;
};


/**
 * DELETE — Supprimer un administrateur
 * @param {string} id
 */
export const deleteAdministrator = async (id) => {
  const token = useAuthStore.getState().token;

  const response = await apiFetch(`/admin/delete/${id}`, "DELETE", null, token);
  return response;
};
