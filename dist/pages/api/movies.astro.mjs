import { g as getPopularMovies } from '../../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const genreId = url.searchParams.get("genre");
  if (!genreId) {
    return new Response(JSON.stringify({ error: "Genre parameter is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  try {
    const movies = await getPopularMovies();
    const filteredMovies = movies.filter((movie) => movie.genre_ids.includes(Number(genreId)));
    return new Response(JSON.stringify(filteredMovies), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error filtering movies:", error);
    return new Response(JSON.stringify({ error: "Failed to filter movies" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
