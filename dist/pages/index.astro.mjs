/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_qb8kPhHD.mjs';
import { M as MovieCarousel } from '../chunks/MovieCarousel_CDqNUohV.mjs';
import { i as getTrendingMovies, g as getPopularMovies, d as getTopRatedMovies, e as getUpcomingMovies } from '../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const trendingMovies = await getTrendingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MovieFan - Discover the World of Cinema" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen"> <!-- Hero Section --> <section class="hero-section"> <div class="hero-backdrop"> <img${addAttribute(trendingMovies[0]?.backdrop_path ? `https://image.tmdb.org/t/p/w1280${trendingMovies[0].backdrop_path}` : "/images/hero-placeholder.jpg", "src")} alt="Featured Movie"> <div class="hero-overlay"></div> </div> <div class="hero-content"> <div class="hero-text"> <h1 class="hero-title"> ${trendingMovies[0]?.title || "Welcome to MovieFan"} </h1> <p class="hero-description"> ${trendingMovies[0]?.overview || "Discover and explore the world of cinema, from classics to the latest releases."} </p> <a${addAttribute(`/movies/${trendingMovies[0]?.id}`, "href")} class="btn-primary">
Learn More
</a> </div> </div> </section> <!-- Trending Movies --> <section class="py-12 bg-[#141414]"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold text-white mb-6">Trending Now</h2> ${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": trendingMovies, "title": "Trending Movies" })} </div> </section> <!-- Popular Movies --> <section class="py-12 bg-[#1a1a1a]"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold text-white mb-6">Popular Movies</h2> ${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": popularMovies, "title": "Popular Movies" })} </div> </section> <!-- Top Rated Movies --> <section class="py-12 bg-[#141414]"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold text-white mb-6">Top Rated</h2> ${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": topRatedMovies, "title": "Top Rated Movies" })} </div> </section> <!-- Upcoming Movies --> <section class="py-12 bg-[#1a1a1a]"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold text-white mb-6">Coming Soon</h2> ${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": upcomingMovies, "title": "Upcoming Movies" })} </div> </section> <!-- About Section --> <section class="py-16 bg-[#141414]"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl font-bold text-white mb-6">About MovieFan</h2> <p class="text-lg text-gray-300 mb-8">
MovieFan is your ultimate destination for discovering and exploring the world of cinema. 
            From timeless classics to the latest blockbusters, we bring you a curated collection of 
            movies from around the globe. Whether you're a casual viewer or a film enthusiast, 
            MovieFan helps you find your next favorite movie.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="card p-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e50914] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg> <h3 class="text-xl font-semibold text-white mb-2">Discover</h3> <p class="text-gray-400">Explore a vast collection of movies from different genres and countries.</p> </div> <div class="card p-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e50914] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path> </svg> <h3 class="text-xl font-semibold text-white mb-2">Rate & Review</h3> <p class="text-gray-400">Share your thoughts and see what others think about your favorite movies.</p> </div> <div class="card p-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#e50914] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> <h3 class="text-xl font-semibold text-white mb-2">Stay Updated</h3> <p class="text-gray-400">Get the latest news and updates about upcoming releases and movie events.</p> </div> </div> </div> </div> </section> </main> ` })}`;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/index.astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
