import axios from 'axios';

const BASE_URl = 'https://api.themoviedb.org/3/trending/all/day';
const API_KEY = 'e0723ed903f05e10ff2c0d0ee3dce9dc';

axios.defaults.baseURL = BASE_URl;

export async function getMovies() {
  const params = {
    api_key: API_KEY,
    per_page: 12,
  };
  return await axios.get('', { params });
}

// q: input,
// image_type: 'photo',
// orientation: 'horizontal',
// safesearch: 'true',
// page: page,
