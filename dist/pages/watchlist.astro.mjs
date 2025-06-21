/* empty css                                 */
import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_qb8kPhHD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi Lista" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold text-white mb-8">Mi Lista de Películas</h1> <div id="watchlist-movies" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> <!-- Los datos se cargarán dinámicamente --> </div> </main> ` })} ${renderScript($$result, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/watchlist/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/watchlist/index.astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/watchlist/index.astro";
const $$url = "/watchlist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
