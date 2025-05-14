import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;


const apiService = axios.create({
    baseURL,  
    headers: {
      'Content-Type': 'application/json',
    },
  });


  export const fetchData = async () => {
    try {
      const response = await apiService.get('/your-api-endpoint/');
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  };