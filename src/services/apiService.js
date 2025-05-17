import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;


const apiService = axios.create({
    baseURL,  
    headers: {
      'Content-Type': 'application/json',
    },
  });


  export function buildHeaders(isFormData = false) {
    const token = sessionStorage.getItem('accountAccessToken');
    console.log(token,'thisis the token')
  
    return {
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    };
  }

  export const get  = (url, params , hdrs = buildHeaders()) =>
    api.get   (url, { params,  headers: hdrs }).then(r => r.data);
  
  export const post = (url, data, hdrs = buildHeaders()) =>
    api.post  (url,data , { headers: hdrs }).then(r => r.data);
  
  export const put  = (url, data, hdrs = buildHeaders()) =>
    api.put   (url,data , { headers: hdrs }).then(r => r.data);
  
  export const del  = (url,hdrs = buildHeaders()) =>
    api.delete(url,{ headers: hdrs }).then(r => r.data);


  export const fetchData = async () => {
    try {
      const response = await get('/api/data');
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };