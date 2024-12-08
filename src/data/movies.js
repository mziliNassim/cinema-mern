// 'Discover' Movies  API URL ===================
export const moviesUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false`;

// 'Search' Movies API URL by  ===================
export const moviesUrlBySearch = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THE_MOVIESDB_SEARCH_API_URL}&query=`;

// Movies API URL Details by ID ===================
export const movieUrlDetailsById = `https://api.themoviedb.org/3/movie/`;

// Movies API URL Populaire ===================
export const movieUrlPopulaire = `https://api.themoviedb.org/3/movie/popular`;

// Movies API URL Top Rated ===================
export const movieUrlTopRated = `https://api.themoviedb.org/3/movie/top_rated`;

// Movies API URL Trends ===================
export const movieUrlTrendsWeek = `https://api.themoviedb.org/3/trending/movie/week?language=en-US`;
export const movieUrlTrendsDay = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

// Movies API URL Genre ===================
export const movieUrlGenre = `https://api.themoviedb.org/3/genre/movie/list`;
