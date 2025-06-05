import axios from 'axios';

const apiEndPoint = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

// Create axios instance
const api = axios.create({
  baseURL: apiEndPoint,
  timeout: 10000,
});

// Helper function to get headers
const getHeaders = (isFormData = false) => {
  const headers: { [key: string]: string } = {
    'X-Requested-With': 'XMLHttpRequest',
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
  };

  const token = sessionStorage.getItem('accountAccessToken');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

// API Service object
export const appService = {
  // GET method: Fetch resource by ID
  get: (url: string,propagation = 0) => {
    
    return api.get(`${url}`, {
      headers: {
        ...getHeaders(),
        propagation: propagation.toString(),
      },
    });
  },

  // POST method: Create resource
  post: (url: string, data: any, propagation = 0) => {
    console.log(`Posting to ${apiEndPoint}${url}`, data); // Debug log
    return api.post(url, data, {
      headers: {
        ...getHeaders(),
        propagation: propagation.toString(),
      },
    });
  },

  // PUT method: Update resource by ID
  put: (url: string, id: string | number, data: any, propagation = 0) => {
    console.log(`Updating ${apiEndPoint}${url}/${id}`, data); // Debug log
    return api.put(`${url}/${id}`, data, {
      headers: {
        ...getHeaders(),
        propagation: propagation.toString(),
      },
    });
  },

  // DELETE method: Delete resource by ID
  delete: (url: string, id: string | number, propagation = 0) => {
    console.log(`Deleting from ${apiEndPoint}${url}/${id}`); // Debug log
    return api.delete(`${url}/${id}`, {
      headers: {
        ...getHeaders(),
        propagation: propagation.toString(),
      },
    });
  },


  login: (data: any) => {
    console.log('Login data:', data);
    return appService.post('/api/logup', data);
  },


  getlocations: () => {

    return appService.get('/api/location');
  },
};
