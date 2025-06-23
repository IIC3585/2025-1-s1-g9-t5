import{s as n}from"./movies.BDkjVIyk.js";let l=null;const c=document.getElementById("search-input"),e=document.getElementById("search-results");c&&e&&(c.addEventListener("input",async s=>{const r=s.target.value.trim();if(l&&clearTimeout(l),!r){e.classList.add("hidden");return}l=setTimeout(async()=>{try{const a=await n(r);a.results.length===0?e.innerHTML=`
              <div class="p-4 text-gray-400">
                No se encontraron películas para "${r}"
              </div>
            `:e.innerHTML=a.results.map(t=>`
              <a href="/movies/${t.id}" class="block p-4 hover:bg-gray-700 transition-colors">
                <div class="flex items-center space-x-4">
                  <img
                    src="https://image.tmdb.org/t/p/w92${t.poster_path}"
                    alt="${t.title}"
                    class="w-12 h-18 object-cover rounded"
                  />
                  <div>
                    <h3 class="text-white font-medium">${t.title}</h3>
                    <p class="text-sm text-gray-400">${t.release_date?new Date(t.release_date).getFullYear():"Sin fecha"}</p>
                    <div class="flex items-center mt-1">
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="ml-1 text-sm text-gray-400">${t.vote_average.toFixed(1)}/10</span>
                    </div>
                  </div>
                </div>
              </a>
            `).join(""),e.classList.remove("hidden")}catch(a){console.error("Error al buscar películas:",a),e.innerHTML=`
            <div class="p-4 text-red-400">
              Error al buscar películas. Por favor, intenta de nuevo.
            </div>
          `,e.classList.remove("hidden")}},300)}),document.addEventListener("click",s=>{!c.contains(s.target)&&!e.contains(s.target)&&e.classList.add("hidden")}));
