/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_qb8kPhHD.mjs';
import { M as MovieCarousel } from '../../chunks/MovieCarousel_CDqNUohV.mjs';
import { a as getMoviesByGenre, b as getGenres } from '../../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://iic3585.github.io/2025-1-s1-g9-t5/");
async function getStaticPaths() {
  const genres = await getGenres();
  return genres.map((genre) => ({
    params: { id: genre.id.toString() },
    props: { genre }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { genre } = Astro2.props;
  const movies = await getMoviesByGenre(genre.id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${genre.name} Movies - MovieFan` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-24"> <section class="py-12 bg-[#141414]"> <div class="container mx-auto px-4"> <h1 class="text-3xl font-bold text-white mb-8"> ${genre.name} Movies
</h1> ${movies.length > 0 ? renderTemplate`${renderComponent($$result2, "MovieCarousel", MovieCarousel, { "movies": movies, "title": `${genre.name} Movies` })}` : renderTemplate`<div class="text-center text-gray-400">
No movies found in this genre.
</div>`} </div> </section> </main> ` })}`;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/genres/[id].astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/genres/[id].astro";
const $$url = "/genres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
