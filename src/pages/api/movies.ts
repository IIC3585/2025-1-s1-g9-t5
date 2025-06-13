import type { APIRoute } from 'astro';
import { getPopularMovies } from '../../services/movies';

export const GET: APIRoute = async ({ url }) => {
  const genreId = url.searchParams.get('genre');

  if (!genreId) {
    return new Response(JSON.stringify({ error: 'Genre parameter is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const movies = await getPopularMovies();
    const filteredMovies = movies.filter(movie => movie.genre_ids.includes(Number(genreId)));
    
    return new Response(JSON.stringify(filteredMovies), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error filtering movies:', error);
    return new Response(JSON.stringify({ error: 'Failed to filter movies' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 