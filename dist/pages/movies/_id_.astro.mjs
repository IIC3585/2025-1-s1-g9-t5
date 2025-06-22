/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Cm35DM8K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_qb8kPhHD.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { c as getMovieDetails, g as getPopularMovies, d as getTopRatedMovies, e as getUpcomingMovies } from '../../chunks/movies_BLQszTfe.mjs';
export { renderers } from '../../renderers.mjs';

class UserMoviesService {
  watchedMovies = [];
  watchlistMovies = [];
  isClient;
  constructor() {
    this.isClient = typeof window !== "undefined";
    if (this.isClient) {
      this.loadFromStorage();
    }
  }
  loadFromStorage() {
    if (!this.isClient) return;
    const watched = localStorage.getItem("watchedMovies");
    const watchlist = localStorage.getItem("watchlistMovies");
    if (watched) this.watchedMovies = JSON.parse(watched);
    if (watchlist) this.watchlistMovies = JSON.parse(watchlist);
  }
  saveToStorage() {
    if (!this.isClient) return;
    localStorage.setItem("watchedMovies", JSON.stringify(this.watchedMovies));
    localStorage.setItem("watchlistMovies", JSON.stringify(this.watchlistMovies));
  }
  markAsWatched(movie) {
    const existingIndex = this.watchedMovies.findIndex((m) => m.id === movie.id);
    if (existingIndex === -1) {
      this.watchedMovies.push({ ...movie, watched: true, watchlist: false });
    }
    this.watchlistMovies = this.watchlistMovies.filter((m) => m.id !== movie.id);
    this.saveToStorage();
  }
  unmarkAsWatched(movieId) {
    this.watchedMovies = this.watchedMovies.filter((m) => m.id !== movieId);
    this.saveToStorage();
  }
  addToWatchlist(movie) {
    const existingIndex = this.watchlistMovies.findIndex((m) => m.id === movie.id);
    if (existingIndex === -1) {
      this.watchlistMovies.push({ ...movie, watched: false, watchlist: true });
    }
    this.saveToStorage();
  }
  removeFromWatchlist(movieId) {
    this.watchlistMovies = this.watchlistMovies.filter((m) => m.id !== movieId);
    this.saveToStorage();
  }
  rateMovie(movieId, rating) {
    const movie = this.watchedMovies.find((m) => m.id === movieId);
    if (movie) {
      movie.rating = rating;
      this.saveToStorage();
    }
  }
  getWatchedMovies() {
    if (!this.isClient) return [];
    return this.watchedMovies;
  }
  getWatchlistMovies() {
    if (!this.isClient) return [];
    return this.watchlistMovies;
  }
  isWatched(movieId) {
    if (!this.isClient) return false;
    return this.watchedMovies.some((m) => m.id === movieId);
  }
  isInWatchlist(movieId) {
    if (!this.isClient) return false;
    return this.watchlistMovies.some((m) => m.id === movieId);
  }
  getMovieRating(movieId) {
    if (!this.isClient) return void 0;
    const movie = this.watchedMovies.find((m) => m.id === movieId);
    return movie?.rating;
  }
}
const userMoviesService = new UserMoviesService();

function MovieDetails({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isWatched, setIsWatched] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  useEffect(() => {
    const userRating = userMoviesService.getMovieRating(movie.id);
    if (userRating) {
      setRating(userRating);
    }
    setIsWatched(userMoviesService.isWatched(movie.id));
    setIsInWatchlist(userMoviesService.isInWatchlist(movie.id));
  }, [movie.id]);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
    userMoviesService.rateMovie(movie.id, newRating);
  };
  const handleToggleWatched = () => {
    if (isWatched) {
      userMoviesService.unmarkAsWatched(movie.id);
      setRating(0);
    } else {
      userMoviesService.markAsWatched({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path || "",
        watched: true,
        watchlist: false
      });
    }
    setIsWatched(!isWatched);
  };
  const handleToggleWatchlist = () => {
    if (isInWatchlist) {
      userMoviesService.removeFromWatchlist(movie.id);
    } else {
      userMoviesService.addToWatchlist({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path || "",
        watched: false,
        watchlist: true
      });
    }
    setIsInWatchlist(!isInWatchlist);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsModalOpen(true),
        className: "inline-flex items-center px-4 py-2 bg-[#e50914] text-white rounded-lg hover:bg-[#f40612] transition-colors",
        children: [
          "View Details",
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 ml-2", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ]
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 transition-opacity", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black opacity-75" }) }),
      /* @__PURE__ */ jsx("div", { className: "inline-block align-bottom bg-[#1a1a1a] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsModalOpen(false),
            className: "absolute top-4 right-4 text-gray-400 hover:text-white",
            children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "sm:flex", children: [
          /* @__PURE__ */ jsx("div", { className: "sm:w-1/3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/images/poster-placeholder.jpg",
              alt: movie.title,
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "sm:w-2/3 p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: movie.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-gray-300 mb-4", children: [
              /* @__PURE__ */ jsx("span", { children: new Date(movie.release_date).getFullYear() }),
              /* @__PURE__ */ jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxs("span", { children: [
                movie.vote_average.toFixed(1),
                "/10"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center mb-4", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
              /* @__PURE__ */ jsx("span", { className: "ml-2 text-white", children: movie.vote_average.toFixed(1) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1", children: [...Array(10)].map((_, index) => {
              const ratingValue = index + 1;
              return /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "focus:outline-none",
                  onClick: () => handleRatingChange(ratingValue),
                  onMouseEnter: () => setHoverRating(ratingValue),
                  onMouseLeave: () => setHoverRating(0),
                  children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: `h-8 w-8 ${ratingValue <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-400"}`,
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
                    }
                  )
                },
                index
              );
            }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mb-4", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleToggleWatched,
                  className: `px-4 py-2 rounded-lg ${isWatched ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-700 text-white hover:bg-gray-600"}`,
                  children: isWatched ? "✓ Vista" : "Marcar como vista"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleToggleWatchlist,
                  className: `px-4 py-2 rounded-lg ${isInWatchlist ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-700 text-white hover:bg-gray-600"}`,
                  children: isInWatchlist ? "✓ En Watchlist" : "Agregar a Watchlist"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: rating ? `Tu calificación: ${rating}/10` : "Califica esta película" })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}

const $$Astro = createAstro("https://iic3585.github.io/2025-1-s1-g9-t5/");
async function getStaticPaths() {
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();
  const allMovies = [...popularMovies, ...topRatedMovies, ...upcomingMovies];
  const uniqueMovies = Array.from(new Map(allMovies.map((movie) => [movie.id, movie])).values());
  return uniqueMovies.map((movie) => ({
    params: { id: movie.id.toString() },
    props: { movie }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { movie } = Astro2.props;
  const movieDetails = await getMovieDetails(movie.id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${movie.title} - MovieFan` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-24"> <!-- Hero Section --> <section class="relative h-[60vh]"> <div class="absolute inset-0"> <img${addAttribute(movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : "/images/hero-placeholder.jpg", "src")}${addAttribute(movie.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div> </div> <div class="relative h-full flex items-end"> <div class="container mx-auto px-4 pb-12"> <div class="max-w-4xl"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4"> ${movie.title} </h1> <p class="text-lg text-gray-300 mb-6 line-clamp-3"> ${movie.overview} </p> <div class="flex items-center gap-4"> <div class="flex items-center"> <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span class="ml-2 text-white">${movie.vote_average.toFixed(1)}</span> </div> <span class="text-gray-400">|</span> <span class="text-gray-300">${new Date(movie.release_date).getFullYear()}</span> </div> </div> </div> </div> </section> <!-- Content Section --> <section class="py-12 bg-[#141414]"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Main Content --> <div class="lg:col-span-2"> <div class="bg-[#1a1a1a] rounded-lg p-6"> <h2 class="text-2xl font-bold text-white mb-4">Overview</h2> <p class="text-gray-300 mb-6">${movie.overview}</p> <div class="grid grid-cols-2 gap-4 mb-6"> <div> <h3 class="text-sm font-semibold text-gray-400 mb-1">Release Date</h3> <p class="text-white">${new Date(movie.release_date).toLocaleDateString()}</p> </div> <div> <h3 class="text-sm font-semibold text-gray-400 mb-1">Runtime</h3> <p class="text-white">${movieDetails.runtime} minutes</p> </div> <div> <h3 class="text-sm font-semibold text-gray-400 mb-1">Language</h3> <p class="text-white">${movieDetails.original_language.toUpperCase()}</p> </div> <div> <h3 class="text-sm font-semibold text-gray-400 mb-1">Budget</h3> <p class="text-white">$${movieDetails.budget.toLocaleString()}</p> </div> </div> </div> </div> <!-- Sidebar --> <div> <div class="bg-[#1a1a1a] rounded-lg p-6"> <h2 class="text-xl font-bold text-white mb-4">Rate this Movie</h2> ${renderComponent($$result2, "MovieDetails", MovieDetails, { "client:load": true, "movie": movie, "client:component-hydration": "load", "client:component-path": "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/components/islands/MovieDetails", "client:component-export": "default" })} </div> </div> </div> </div> </section> </main> ` })}`;
}, "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Dise\xF1o Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/[id].astro", void 0);

const $$file = "C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/[id].astro";
const $$url = "/movies/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
