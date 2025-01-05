import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';

export const getPopularMovies = () =>
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

export const getTopRatedMovies = () =>
  axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

export const getUpcomingMovies = () =>
  axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

export const getMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
