/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_qb8kPhHD.mjs';
import { b as getGenres } from '../chunks/movies_BLQszTfe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const genres = await getGenres();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Movie Genres - MovieFan", "data-astro-cid-xrlvblhl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-24" data-astro-cid-xrlvblhl> <section class="py-12 bg-[#141414]" data-astro-cid-xrlvblhl> <div class="container mx-auto px-4" data-astro-cid-xrlvblhl> <h1 class="text-3xl font-bold text-white mb-8 text-center" data-astro-cid-xrlvblhl>Movie Genres</h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-xrlvblhl> ${genres.map((genre) => renderTemplate`<a${addAttribute(`/genres/${genre.id}`, "href")} class="genre-card group" data-astro-cid-xrlvblhl> <div class="genre-content" data-astro-cid-xrlvblhl> <h2 class="genre-title" data-astro-cid-xrlvblhl>${genre.name}</h2> <p class="genre-description" data-astro-cid-xrlvblhl>
Explore our collection of ${genre.name.toLowerCase()} movies
</p> </div> </a>`)} </div> </div> </section> </main> ` })} `;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/genres/index.astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/genres/index.astro";
const $$url = "/genres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
