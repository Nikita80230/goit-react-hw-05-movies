import axios from 'axios';

const API_KEY = 'e0723ed903f05e10ff2c0d0ee3dce9dc';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export async function getMovies() {
  const { data } = await instance.get('/trending/all/day');
  return data;
}

// q: input,
// image_type: 'photo',
// orientation: 'horizontal',
// safesearch: 'true',
// page: page,
