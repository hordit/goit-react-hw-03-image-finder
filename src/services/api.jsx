import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

 export const getImages = async (searchName, page) => {
  const response = await axios.get(`${BASE_URL}/?`, {
    params: {
      key: API_KEY,
      q: searchName,
      page: page,
      per_page: 12,
      image_type: 'photo',
    },
  });
  return response.data.hits;
};

