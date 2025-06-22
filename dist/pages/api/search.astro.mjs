import { s as searchMovies } from '../../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const query = url.searchParams.get("query");
  if (!query) {
    return new Response(JSON.stringify({ error: "Query parameter is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  try {
    const movies = await searchMovies(query);
    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error searching movies:", error);
    return new Response(JSON.stringify({ error: "Failed to search movies" }), {
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
