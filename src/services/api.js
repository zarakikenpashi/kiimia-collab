// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// export const apiFetch = async (endpoint, method = 'GET', data = null, token = null) => {
//   const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   };

//   if (token) {
//     headers['Authorization'] = `Bearer ${token}`;
//   }

//   const config = {
//     method,
//     headers,
//   };

//   if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
//     config.body = JSON.stringify(data);
//   }

//   try {
//     const response = await fetch(`${API_URL}${endpoint}`, config);

//     // Gestion des erreurs HTTP
//     if (!response.ok) {
//       const error = await response.json().catch(() => ({}));
//       throw new Error(error.message || `Erreur HTTP: ${response.status}`);
//     }

//     // Certaines requêtes (comme logout) peuvent ne pas retourner de JSON
//     const contentType = response.headers.get('content-type');
//     if (contentType && contentType.includes('application/json')) {
//       return await response.json();
//     }

//     return { success: true };
//   } catch (error) {
//     console.error('Erreur API:', error);
//     throw error;
//   }
// };


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

/**
 * apiFetch
 * @param {string} endpoint
 * @param {string} method
 * @param {Object|FormData|null} data
 * @param {string|null} token
 * @param {boolean} isFormData  <-- OPTIONNEL
 */
export const apiFetch = async (
  endpoint,
  method = 'GET',
  data = null,
  token = null,
  isFormData = false
) => {

  // Headers par défaut
  const headers = {
    'Accept': 'application/json',
  };

  // Ajouter le token
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Si ce n'est PAS du FormData → ajouter Content-Type JSON
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  const config = {
    method,
    headers,
  };

  // Gestion du body selon JSON ou FormData
  if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    config.body = isFormData ? data : JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Erreur HTTP: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }

    return { success: true };

  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};
