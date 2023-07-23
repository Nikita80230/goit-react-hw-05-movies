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

export async function getMoviesById(id) {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
}

export async function getMoviesByName(query) {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data;
}

export async function getMoviesCastById(id) {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
}

export async function getMoviesReviewsById(id) {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
}
