/* empty css                                 */
import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_qb8kPhHD.mjs';
import { g as getPopularMovies, b as getGenres, h as getPosterUrl } from '../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const [popularMovies, genres] = await Promise.all([
    getPopularMovies(),
    getGenres()
  ]);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pel\xEDculas - CineChile" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50"> <!-- Hero Section --> <section class="bg-gradient-to-r from-blue-600 to-red-600 py-16"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center text-white"> <h1 class="text-4xl font-bold mb-6">Explora el Cine Chileno</h1> <p class="text-xl mb-8">Descubre las mejores películas chilenas, desde clásicos hasta los últimos estrenos.</p> <!-- Search Form --> <form class="flex gap-4" id="searchForm"> <input type="text" name="query" placeholder="Buscar películas..." class="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"> <button type="submit" class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
Buscar
</button> </form> </div> </div> </section> <!-- Filters --> <section class="py-8 bg-white border-b"> <div class="container mx-auto px-4"> <div class="flex flex-wrap gap-4"> ${genres.map((genre) => renderTemplate`<button class="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"${addAttribute(genre.id, "data-genre")}> ${genre.name} </button>`)} </div> </div> </section> <!-- Movies Grid --> <section class="container mx-auto px-4 py-12"> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" id="moviesGrid"> ${popularMovies.map((movie) => renderTemplate`<a${addAttribute(`/peliculas/${movie.id}`, "href")} class="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"> <div class="relative aspect-[2/3]"> <img${addAttribute(getPosterUrl(movie.poster_path), "src")}${addAttribute(movie.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"> <div class="absolute bottom-0 left-0 right-0 p-4 text-white"> <div class="flex items-center gap-2 mb-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span>${movie.vote_average.toFixed(1)}</span> </div> <h3 class="font-semibold line-clamp-2">${movie.title}</h3> </div> </div> </div> <div class="p-4"> <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">${movie.title}</h3> <p class="text-sm text-gray-600 line-clamp-2">${movie.overview}</p> <div class="mt-4 flex items-center justify-between"> <span class="text-sm text-gray-500">${new Date(movie.release_date).getFullYear()}</span> <div class="flex flex-wrap gap-2"> ${movie.genre_ids.slice(0, 2).map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? renderTemplate`<span class="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full"> ${genre.name} </span>` : null;
  })} </div> </div> </div> </a>`)} </div> </section> </main> ` })} ${renderScript($$result, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/index.astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/index.astro";
const $$url = "/peliculas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
