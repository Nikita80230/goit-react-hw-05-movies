import axios from 'axios';

const BASE_URl = 'https://api.themoviedb.org/3/trending/all/day/';
const API_KEY = '4d836ee8b695dbb4b348c2a4aa247c23';

axios.defaults.baseURL = BASE_URl;

export async function getData(input, page) {
  const params = {
    key: API_KEY,
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page: page,
  };
  return await axios.get('/', { params });
}
