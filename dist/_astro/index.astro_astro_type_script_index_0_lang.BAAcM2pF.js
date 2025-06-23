import{u as i}from"./userMovies.CtvOXl4d.js";window.userMoviesService=i;function a(){const e=document.getElementById("watchlist-movies");if(!e)return;const s=i.getWatchlistMovies();if(s.length===0){e.innerHTML=`
        <div class="col-span-full text-center text-gray-400">
          <p class="text-lg">Tu lista está vacía.</p>
          <p class="mt-2">¡Agrega películas a tu lista para verlas más tarde!</p>
        </div>
      `;return}e.innerHTML=s.map(t=>`
      <div class="bg-gray-800 rounded-lg overflow-hidden">
        <div class="relative aspect-[2/3]">
          <img
            src="https://image.tmdb.org/t/p/w500${t.poster_path}"
            alt="${t.title}"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold text-white mb-2">${t.title}</h3>
          <button
            class="text-blue-400 hover:text-blue-300 text-sm mt-2"
            onclick="userMoviesService.removeFromWatchlist(${t.id}); renderWatchlist();"
          >
            Quitar de la Lista
          </button>
        </div>
      </div>
    `).join("")}window.renderWatchlist=a;document.addEventListener("DOMContentLoaded",a);
