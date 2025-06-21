const TMDB_API_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const TMDB_ENDPOINTS = {
  TRENDING: "/trending/movie/week",
  POPULAR: "/movie/popular",
  TOP_RATED: "/movie/top_rated",
  UPCOMING: "/movie/upcoming",
  NOW_PLAYING: "/movie/now_playing",
  MOVIE_DETAILS: (id) => `/movie/${id}`,
  MOVIE_CREDITS: (id) => `/movie/${id}/credits`,
  MOVIE_VIDEOS: (id) => `/movie/${id}/videos`,
  MOVIE_RECOMMENDATIONS: (id) => `/movie/${id}/recommendations`,
  SEARCH: "/search/movie",
  GENRES: "/genre/movie/list",
  DISCOVER: "/discover/movie"
};
const IMAGE_SIZES = {
  POSTER: {
    SMALL: "w185",
    MEDIUM: "w342",
    LARGE: "w500",
    ORIGINAL: "original"
  },
  BACKDROP: {
    SMALL: "w300",
    MEDIUM: "w780",
    LARGE: "w1280",
    ORIGINAL: "original"
  }
};

const TMDB_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2JkMTIyNDQxMmY5ZjBmZjVlYTMwOTk2ZTQ0Yjg2ZCIsIm5iZiI6MTc0OTg0NDMxMS42MTIsInN1YiI6IjY4NGM4MTU3ZDY2OTIzNWRlMGJiNDkwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b0I-HtuhO8-8Fw96hWys8v3bZd0T93YF42IZDLRPS3g";
const fetchTMDB = async (endpoint, params = {}) => {
  const url = new URL(`${TMDB_API_BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  const response = await fetch(url.toString(), {
    headers: {
      "Authorization": `Bearer ${TMDB_ACCESS_TOKEN}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Error fetching from TMDB: ${response.statusText}`);
  }
  return response.json();
};
const getTrendingMovies = async () => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.TRENDING);
  return data.results;
};
const getPopularMovies = async () => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.POPULAR);
  return data.results;
};
const getTopRatedMovies = async () => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.TOP_RATED);
  return data.results;
};
const getUpcomingMovies = async () => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.UPCOMING);
  return data.results;
};
const getMoviesByGenre = async (genreId) => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.DISCOVER, {
    with_genres: genreId.toString()
  });
  return data.results;
};
const getMovieDetails = async (id) => {
  const [movie, credits, videos] = await Promise.all([
    fetchTMDB(TMDB_ENDPOINTS.MOVIE_DETAILS(id)),
    fetchTMDB(TMDB_ENDPOINTS.MOVIE_CREDITS(id)),
    fetchTMDB(TMDB_ENDPOINTS.MOVIE_VIDEOS(id))
  ]);
  return {
    ...movie,
    credits,
    videos
  };
};
const searchMovies = async (query) => {
  return fetchTMDB(TMDB_ENDPOINTS.SEARCH, { query });
};
const getGenres = async () => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.GENRES);
  return data.genres;
};
const getPosterUrl = (path, size = "MEDIUM") => {
  if (!path) return "/images/poster-placeholder.jpg";
  return `${TMDB_IMAGE_BASE_URL}/${IMAGE_SIZES.POSTER[size]}${path}`;
};
const getBackdropUrl = (path, size = "LARGE") => {
  if (!path) return "/images/backdrop-placeholder.jpg";
  return `${TMDB_IMAGE_BASE_URL}/${IMAGE_SIZES.BACKDROP[size]}${path}`;
};

export { getMoviesByGenre as a, getGenres as b, getMovieDetails as c, getTopRatedMovies as d, getUpcomingMovies as e, getBackdropUrl as f, getPopularMovies as g, getPosterUrl as h, getTrendingMovies as i, searchMovies as s };
