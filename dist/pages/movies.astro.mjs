/* empty css                                 */
import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_qb8kPhHD.mjs';
import { M as MovieCarousel } from '../chunks/MovieCarousel_CDqNUohV.mjs';
import { g as getPopularMovies, d as getTopRatedMovies, e as getUpcomingMovies } from '../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Descubre Pel\xEDculas" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold text-white mb-8">Descubre Películas</h1> <div class="mb-8"> <div class="relative"> <input type="text" id="search-input" placeholder="Buscar películas..." class="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"> <div id="search-results" class="absolute z-10 w-full mt-2 bg-gray-800 rounded-lg shadow-lg hidden"> <!-- Los resultados se cargarán dinámicamente --> </div> </div> </div> <section class="mb-12"> <h2 class="text-2xl font-semibold text-white mb-6">Películas Populares</h2> ${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": popularMovies })} </section> <section class="mb-12"> <h2 class="text-2xl font-semibold text-white mb-6">Mejor Calificadas</h2> ${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": topRatedMovies })} </section> <section class="mb-12"> <h2 class="text-2xl font-semibold text-white mb-6">Próximos Estrenos</h2> ${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": upcomingMovies })} </section> </main> ` })} ${renderScript($$result, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/index.astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/index.astro";
const $$url = "/movies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
