import type { APIRoute } from 'astro';
import { searchMovies } from '../../services/movies';

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('query');

  if (!query) {
    return new Response(JSON.stringify({ error: 'Query parameter is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const movies = await searchMovies(query);
    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error searching movies:', error);
    return new Response(JSON.stringify({ error: 'Failed to search movies' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 