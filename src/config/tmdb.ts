export const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const TMDB_ENDPOINTS = {
  TRENDING: '/trending/movie/week',
  POPULAR: '/movie/popular',
  TOP_RATED: '/movie/top_rated',
  UPCOMING: '/movie/upcoming',
  NOW_PLAYING: '/movie/now_playing',
  MOVIE_DETAILS: (id: number) => `/movie/${id}`,
  MOVIE_CREDITS: (id: number) => `/movie/${id}/credits`,
  MOVIE_VIDEOS: (id: number) => `/movie/${id}/videos`,
  MOVIE_RECOMMENDATIONS: (id: number) => `/movie/${id}/recommendations`,
  SEARCH: '/search/movie',
  GENRES: '/genre/movie/list',
  DISCOVER: '/discover/movie'
};

export const IMAGE_SIZES = {
  POSTER: {
    SMALL: 'w185',
    MEDIUM: 'w342',
    LARGE: 'w500',
    ORIGINAL: 'original'
  },
  BACKDROP: {
    SMALL: 'w300',
    MEDIUM: 'w780',
    LARGE: 'w1280',
    ORIGINAL: 'original'
  }
};

export {}; 