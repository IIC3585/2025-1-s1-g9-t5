/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_qb8kPhHD.mjs';
import { M as MovieCarousel } from '../../chunks/MovieCarousel_CDqNUohV.mjs';
import { s as searchMovies } from '../../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://iic3585.github.io/2025-1-s1-g9-t5/");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const { q } = Astro2.url.searchParams;
  const searchResults = q ? await searchMovies(q) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search Results for "${q}" - MovieFan` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-24"> <section class="py-12 bg-[#141414]"> <div class="container mx-auto px-4"> <h1 class="text-3xl font-bold text-white mb-8"> ${q ? `Search Results for "${q}"` : "Search Movies"} </h1> ${searchResults.length > 0 ? renderTemplate`${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": searchResults, "title": "Search Results" })}` : renderTemplate`<div class="text-center text-gray-400"> ${q ? "No movies found. Try a different search term." : "Enter a search term to find movies."} </div>`} </div> </section> </main> ` })}`;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/search.astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/search.astro";
const $$url = "/movies/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
