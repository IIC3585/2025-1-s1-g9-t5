import { defineComponent, useSSRContext, ref, onMounted, mergeProps } from 'vue';
import { h as getPosterUrl } from './movies_BLQszTfe.mjs';
/* empty css                        */
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const itemsPerPage = 5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MovieCarousel",
  props: {
    movies: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const currentIndex = ref(0);
    const containerRef = ref(null);
    const isDragging = ref(false);
    const startX = ref(0);
    const scrollLeft = ref(0);
    const next = () => {
      if (currentIndex.value < props.movies.length - itemsPerPage) {
        currentIndex.value++;
        if (containerRef.value) {
          containerRef.value.scrollTo({
            left: containerRef.value.scrollLeft + containerRef.value.offsetWidth,
            behavior: "smooth"
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
            behavior: "smooth"
          });
        }
      }
    };
    const handleMouseDown = (e) => {
      isDragging.value = true;
      startX.value = e.pageX - (containerRef.value?.offsetLeft || 0);
      scrollLeft.value = containerRef.value?.scrollLeft || 0;
    };
    const handleMouseMove = (e) => {
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
        containerRef.value.addEventListener("mousedown", handleMouseDown);
        containerRef.value.addEventListener("mousemove", handleMouseMove);
        containerRef.value.addEventListener("mouseup", handleMouseUp);
        containerRef.value.addEventListener("mouseleave", handleMouseUp);
      }
    });
    const __returned__ = { props, currentIndex, containerRef, isDragging, startX, scrollLeft, itemsPerPage, next, prev, handleMouseDown, handleMouseMove, handleMouseUp, get getPosterUrl() {
      return getPosterUrl;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "movie-carousel" }, _attrs))}><div class="flex space-x-4 overflow-x-auto scrollbar-hide" style="${ssrRenderStyle({ "scroll-behavior": "smooth" })}"><!--[-->`);
  ssrRenderList($props.movies, (movie) => {
    _push(`<div class="movie-card flex-shrink-0"><a${ssrRenderAttr("href", `/movies/${movie.id}`)} class="block group"><div class="movie-poster"><img${ssrRenderAttr("src", $setup.getPosterUrl(movie.poster_path))}${ssrRenderAttr("alt", movie.title)} class="group-hover:scale-105"><div class="movie-overlay group-hover:opacity-100"><div class="movie-info"><h3 class="movie-title">${ssrInterpolate(movie.title)}</h3><div class="movie-rating"><svg xmlns="http://www.w3.org/2000/svg" class="movie-rating-icon" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span class="movie-rating-value">${ssrInterpolate(movie.vote_average.toFixed(1))}/10</span></div></div></div></div></a></div>`);
  });
  _push(`<!--]--></div>`);
  if ($setup.currentIndex > 0) {
    _push(`<button class="nav-button nav-button-prev" aria-label="Anterior"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.currentIndex < $props.movies.length - $setup.itemsPerPage) {
    _push(`<button class="nav-button nav-button-next" aria-label="Siguiente"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/islands/MovieCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MovieCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { MovieCarousel as M };
