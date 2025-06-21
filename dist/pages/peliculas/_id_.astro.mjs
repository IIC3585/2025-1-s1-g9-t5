/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_qb8kPhHD.mjs';
import { c as getMovieDetails, f as getBackdropUrl, h as getPosterUrl } from '../../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://iic3585.github.io/2025-1-s1-g9-t5/");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const movie = await getMovieDetails(Number(id));
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0
    }).format(amount);
  };
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${movie.title} - CineChile` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50"> <!-- Hero Section --> <section class="relative h-[70vh]"> <div class="absolute inset-0 bg-cover bg-center"${addAttribute(`background-image: url(${getBackdropUrl(movie.backdrop_path, "ORIGINAL")})`, "style")}> <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div> </div> <div class="relative container mx-auto px-4 h-full flex items-end pb-16"> <div class="flex flex-col md:flex-row gap-8 items-end"> <img${addAttribute(getPosterUrl(movie.poster_path, "LARGE"), "src")}${addAttribute(movie.title, "alt")} class="w-64 rounded-lg shadow-xl"> <div class="text-white"> <h1 class="text-4xl md:text-5xl font-bold mb-4">${movie.title}</h1> <p class="text-xl text-gray-300 mb-6 italic">${movie.tagline}</p> <div class="flex flex-wrap gap-4 mb-6"> ${movie.genres?.map((genre) => renderTemplate`<span class="px-3 py-1 bg-blue-600 rounded-full text-sm"> ${genre.name} </span>`)} </div> <div class="flex items-center gap-6 text-gray-300"> <span>${new Date(movie.release_date).getFullYear()}</span> <span>${formatRuntime(movie.runtime)}</span> <div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span class="ml-1">${movie.vote_average.toFixed(1)}</span> </div> </div> </div> </div> </div> </section> <!-- Content Section --> <section class="container mx-auto px-4 py-12"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> <!-- Main Content --> <div class="lg:col-span-2"> <div class="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 class="text-2xl font-bold text-blue-600 mb-4">Sinopsis</h2> <p class="text-gray-600 leading-relaxed">${movie.overview}</p> </div> <!-- Cast Section --> <div class="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 class="text-2xl font-bold text-blue-600 mb-6">Reparto</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${movie.credits.cast.slice(0, 8).map((actor) => renderTemplate`<div class="text-center"> <img${addAttribute(actor.profile_path ? getPosterUrl(actor.profile_path, "SMALL") : "/placeholder-profile.jpg", "src")}${addAttribute(actor.name, "alt")} class="w-24 h-24 rounded-full mx-auto mb-2 object-cover"> <h3 class="font-semibold text-gray-900">${actor.name}</h3> <p class="text-sm text-gray-600">${actor.character}</p> </div>`)} </div> </div> <!-- Videos Section --> ${movie.videos.results.length > 0 && renderTemplate`<div class="bg-white rounded-lg shadow-lg p-8"> <h2 class="text-2xl font-bold text-blue-600 mb-6">Videos</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${movie.videos.results.slice(0, 2).map((video) => renderTemplate`<div class="aspect-video"> <iframe${addAttribute(`https://www.youtube.com/embed/${video.key}`, "src")}${addAttribute(video.name, "title")} class="w-full h-full rounded-lg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>`)} </div> </div>`} </div> <!-- Sidebar --> <div class="space-y-8"> <div class="bg-white rounded-lg shadow-lg p-6"> <h3 class="text-xl font-bold text-blue-600 mb-4">Detalles</h3> <dl class="space-y-4"> <div> <dt class="text-sm font-medium text-gray-500">Estado</dt> <dd class="mt-1 text-gray-900">${movie.status}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Presupuesto</dt> <dd class="mt-1 text-gray-900">${formatCurrency(movie.budget)}</dd> </div> <div> <dt class="text-sm font-medium text-gray-500">Ingresos</dt> <dd class="mt-1 text-gray-900">${formatCurrency(movie.revenue)}</dd> </div> </dl> </div> <div class="bg-white rounded-lg shadow-lg p-6"> <h3 class="text-xl font-bold text-blue-600 mb-4">Equipo Técnico</h3> <div class="space-y-4"> ${movie.credits.crew.filter((member) => ["Director", "Producer", "Screenplay"].includes(member.job)).slice(0, 5).map((member) => renderTemplate`<div> <h4 class="font-semibold text-gray-900">${member.name}</h4> <p class="text-sm text-gray-600">${member.job}</p> </div>`)} </div> </div> </div> </div> </section> </main> ` })}`;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/[id].astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/[id].astro";
const $$url = "/peliculas/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
