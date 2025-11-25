const API_URL = import.meta.env.VITE_API_URL;

export const apiFetch = async (endpoint, method = 'GET', data = null, token = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const config = {
    method,
    headers,
  };

  if (data) config.body = JSON.stringify(data);

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const json = await response.json();

  if (!response.ok) throw new Error(json.message || 'API error');

  return json;
};
