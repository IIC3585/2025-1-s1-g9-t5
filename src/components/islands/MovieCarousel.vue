<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Movie } from '../../services/movies';
import { getPosterUrl } from '../../services/movies';
import '../../styles/movie-carousel.css';

const props = defineProps<{
  movies: Movie[];
}>();

const currentIndex = ref(0);
const containerRef = ref<HTMLElement | null>(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const itemsPerPage = 5;
const base = import.meta.env.BASE_URL;

const next = () => {
  if (currentIndex.value < props.movies.length - itemsPerPage) {
    currentIndex.value++;
    if (containerRef.value) {
      containerRef.value.scrollTo({
        left: containerRef.value.scrollLeft + containerRef.value.offsetWidth,
        behavior: 'smooth'
      });
    }
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    if (containerRef.value) {
      containerRef.value.scrollTo({
        left: containerRef.value.scrollLeft - containerRef.value.offsetWidth,
        behavior: 'smooth'
      });
    }
  }
};

const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true;
  startX.value = e.pageX - (containerRef.value?.offsetLeft || 0);
  scrollLeft.value = containerRef.value?.scrollLeft || 0;
};

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.pageX - (containerRef.value?.offsetLeft || 0);
  const walk = (x - startX.value) * 2;
  if (containerRef.value) {
    containerRef.value.scrollLeft = scrollLeft.value - walk;
  }
};

const handleMouseUp = () => {
  isDragging.value = false;
};

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('mousedown', handleMouseDown);
    containerRef.value.addEventListener('mousemove', handleMouseMove);
    containerRef.value.addEventListener('mouseup', handleMouseUp);
    containerRef.value.addEventListener('mouseleave', handleMouseUp);
  }
});
</script>

<template>
  <div class="movie-carousel">
    <div 
      ref="containerRef"
      class="flex space-x-4 overflow-x-auto scrollbar-hide"
      style="scroll-behavior: smooth;"
    >
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="movie-card flex-shrink-0"
      >
        <a :href="`${base}movies/${movie.id}`" class="block group">
          <div class="movie-poster">
            <img
              :src="getPosterUrl(movie.poster_path)"
              :alt="movie.title"
              class="group-hover:scale-105"
            />
            <div class="movie-overlay group-hover:opacity-100">
              <div class="movie-info">
                <h3 class="movie-title">{{ movie.title }}</h3>
                <div class="movie-rating">
                  <svg xmlns="http://www.w3.org/2000/svg" class="movie-rating-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="movie-rating-value">{{ movie.vote_average.toFixed(1) }}/10</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <button
      v-if="currentIndex > 0"
      @click="prev"
      class="nav-button nav-button-prev"
      aria-label="Anterior"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      v-if="currentIndex < movies.length - itemsPerPage"
      @click="next"
      class="nav-button nav-button-next"
      aria-label="Siguiente"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<style>
.movie-carousel {
  position: relative;
  padding: 0 2rem;
}

.movie-card {
  flex: 0 0 calc(20% - 1rem);
  transition: transform 0.3s ease;
}

.movie-poster {
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
  border-radius: 0.5rem;
}

.movie-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.movie-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
}

.movie-info {
  color: white;
}

.movie-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.movie-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.movie-rating-icon {
  width: 1rem;
  height: 1rem;
  color: #fbbf24;
}

.movie-rating-value {
  font-size: 0.875rem;
  color: #e5e7eb;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.nav-button-prev {
  left: 0;
}

.nav-button-next {
  right: 0;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style> 