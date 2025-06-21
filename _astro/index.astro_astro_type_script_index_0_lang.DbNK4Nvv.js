import{u as a}from"./userMovies.CtvOXl4d.js";window.userMoviesService=a;function l(){const t=document.getElementById("watched-movies");if(!t)return;const s=a.getWatchedMovies();if(s.length===0){t.innerHTML=`
        <div class="col-span-full text-center text-gray-400">
          <p class="text-lg">No has visto ninguna película aún.</p>
          <p class="mt-2">¡Explora películas y márcalas como vistas!</p>
        </div>
      `;return}t.innerHTML=s.map(e=>`
      <div class="bg-gray-800 rounded-lg overflow-hidden">
        <div class="relative aspect-[2/3]">
          <img
            src="https://image.tmdb.org/t/p/w500${e.poster_path}"
            alt="${e.title}"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-white mb-2">${e.title}</h3>
          ${e.rating?`
            <div class="flex items-center">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="ml-2 text-white">Tu calificación: ${e.rating}/10</span>
            </div>
          `:""}
          <button
            class="text-blue-400 hover:text-blue-300 text-sm mt-2"
            onclick="userMoviesService.unmarkAsWatched(${e.id}); renderWatchedMovies();"
          >
            Quitar de Vistas
          </button>
        </div>
      </div>
    `).join("")}window.renderWatchedMovies=l;document.addEventListener("DOMContentLoaded",l);
