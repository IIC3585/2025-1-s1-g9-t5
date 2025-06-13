import { TMDB_API_BASE_URL, TMDB_IMAGE_BASE_URL, TMDB_ENDPOINTS, IMAGE_SIZES } from '../config/tmdb';

const TMDB_ACCESS_TOKEN = import.meta.env.PUBLIC_TMDB_ACCESS_TOKEN;

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  runtime: number;
  status: string;
  tagline: string;
  budget: number;
  revenue: number;
  credits: {
    cast: Cast[];
    crew: Crew[];
  };
  videos: {
    results: Video[];
  };
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface Crew {
  id: number;
  name: string;
  job: string;
  department: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

interface SearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const fetchTMDB = async (endpoint: string, params: Record<string, string> = {}) => {
  const url = new URL(`${TMDB_API_BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching from TMDB: ${response.statusText}`);
  }

  return response.json();
};

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.TRENDING);
  return data.results;
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.POPULAR);
  return data.results;
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.TOP_RATED);
  return data.results;
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.UPCOMING);
  return data.results;
};

export const getMoviesByGenre = async (genreId: number): Promise<Movie[]> => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.DISCOVER, {
    with_genres: genreId.toString(),
  });
  return data.results;
};

export const getMovieDetails = async (id: number): Promise<MovieDetails> => {
  const [movie, credits, videos] = await Promise.all([
    fetchTMDB(TMDB_ENDPOINTS.MOVIE_DETAILS(id)),
    fetchTMDB(TMDB_ENDPOINTS.MOVIE_CREDITS(id)),
    fetchTMDB(TMDB_ENDPOINTS.MOVIE_VIDEOS(id)),
  ]);

  return {
    ...movie,
    credits,
    videos,
  };
};

export const searchMovies = async (query: string): Promise<SearchResponse> => {
  return fetchTMDB(TMDB_ENDPOINTS.SEARCH, { query });
};

export const getGenres = async (): Promise<Genre[]> => {
  const data = await fetchTMDB(TMDB_ENDPOINTS.GENRES);
  return data.genres;
};

export const getPosterUrl = (path: string | null, size: keyof typeof IMAGE_SIZES.POSTER = 'MEDIUM'): string => {
  if (!path) return '/images/poster-placeholder.jpg';
  return `${TMDB_IMAGE_BASE_URL}/${IMAGE_SIZES.POSTER[size]}${path}`;
};

export const getBackdropUrl = (path: string | null, size: keyof typeof IMAGE_SIZES.BACKDROP = 'LARGE'): string => {
  if (!path) return '/images/backdrop-placeholder.jpg';
  return `${TMDB_IMAGE_BASE_URL}/${IMAGE_SIZES.BACKDROP[size]}${path}`;
}; 