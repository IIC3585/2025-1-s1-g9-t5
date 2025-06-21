import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_Cm35DM8K.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/","cacheDir":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/node_modules/.astro/","outDir":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/","srcDir":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/src/","publicDir":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/public/","buildClientDir":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/client/","buildServerDir":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/api/movies","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/movies","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/movies\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"movies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/movies.ts","pathname":"/api/movies","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/api/search","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/search","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/search\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/search.ts","pathname":"/api/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/genres/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/genres","isIndex":true,"type":"page","pattern":"^\\/genres\\/?$","segments":[[{"content":"genres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/genres/index.astro","pathname":"/genres","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/history/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/history","isIndex":true,"type":"page","pattern":"^\\/history\\/?$","segments":[[{"content":"history","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/history/index.astro","pathname":"/history","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/movies/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/movies/search","isIndex":false,"type":"page","pattern":"^\\/movies\\/search\\/?$","segments":[[{"content":"movies","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/movies/search.astro","pathname":"/movies/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/movies/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/movies","isIndex":true,"type":"page","pattern":"^\\/movies\\/?$","segments":[[{"content":"movies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/movies/index.astro","pathname":"/movies","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/peliculas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/peliculas","isIndex":true,"type":"page","pattern":"^\\/peliculas\\/?$","segments":[[{"content":"peliculas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/peliculas/index.astro","pathname":"/peliculas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/watchlist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/watchlist","isIndex":true,"type":"page","pattern":"^\\/watchlist\\/?$","segments":[[{"content":"watchlist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/watchlist/index.astro","pathname":"/watchlist","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://iic3585.github.io/2025-1-s1-g9-t5/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/genres/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/genres/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/history/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/search.astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/watchlist/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/movies@_@ts":"pages/api/movies.astro.mjs","\u0000@astro-page:src/pages/api/search@_@ts":"pages/api/search.astro.mjs","\u0000@astro-page:src/pages/genres/[id]@_@astro":"pages/genres/_id_.astro.mjs","\u0000@astro-page:src/pages/genres/index@_@astro":"pages/genres.astro.mjs","\u0000@astro-page:src/pages/history/index@_@astro":"pages/history.astro.mjs","\u0000@astro-page:src/pages/movies/search@_@astro":"pages/movies/search.astro.mjs","\u0000@astro-page:src/pages/movies/[id]@_@astro":"pages/movies/_id_.astro.mjs","\u0000@astro-page:src/pages/movies/index@_@astro":"pages/movies.astro.mjs","\u0000@astro-page:src/pages/peliculas/[id]@_@astro":"pages/peliculas/_id_.astro.mjs","\u0000@astro-page:src/pages/peliculas/index@_@astro":"pages/peliculas.astro.mjs","\u0000@astro-page:src/pages/watchlist/index@_@astro":"pages/watchlist.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D1MFst04.mjs","C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/components/islands/MovieDetails":"_astro/MovieDetails.BHDcv9S2.js","@astrojs/vue/client.js":"_astro/client.De7i6jfw.js","@astrojs/react/client.js":"_astro/client.DZFhG_ds.js","C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/history/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DbNK4Nvv.js","C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CUe5D0Vc.js","C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CR6NDdGe.js","C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/watchlist/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BAAcM2pF.js","C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.d6V8J2CV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/movies/index.astro?astro&type=script&index=0&lang.ts","const o=\"https://api.themoviedb.org/3\",d={SEARCH:\"/search/movie\"},h=\"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2JkMTIyNDQxMmY5ZjBmZjVlYTMwOTk2ZTQ0Yjg2ZCIsIm5iZiI6MTc0OTg0NDMxMS42MTIsInN1YiI6IjY4NGM4MTU3ZDY2OTIzNWRlMGJiNDkwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b0I-HtuhO8-8Fw96hWys8v3bZd0T93YF42IZDLRPS3g\",u=async(s,r={})=>{const a=new URL(`${o}${s}`);Object.entries(r).forEach(([i,l])=>{a.searchParams.append(i,l)});const e=await fetch(a.toString(),{headers:{Authorization:`Bearer ${h}`,\"Content-Type\":\"application/json\"}});if(!e.ok)throw new Error(`Error fetching from TMDB: ${e.statusText}`);return e.json()},p=async s=>u(d.SEARCH,{query:s});let c=null;const n=document.getElementById(\"search-input\"),t=document.getElementById(\"search-results\");n&&t&&(n.addEventListener(\"input\",async s=>{const r=s.target.value.trim();if(c&&clearTimeout(c),!r){t.classList.add(\"hidden\");return}c=setTimeout(async()=>{try{const a=await p(r);a.results.length===0?t.innerHTML=`\n              <div class=\"p-4 text-gray-400\">\n                No se encontraron películas para \"${r}\"\n              </div>\n            `:t.innerHTML=a.results.map(e=>`\n              <a href=\"/movies/${e.id}\" class=\"block p-4 hover:bg-gray-700 transition-colors\">\n                <div class=\"flex items-center space-x-4\">\n                  <img\n                    src=\"https://image.tmdb.org/t/p/w92${e.poster_path}\"\n                    alt=\"${e.title}\"\n                    class=\"w-12 h-18 object-cover rounded\"\n                  />\n                  <div>\n                    <h3 class=\"text-white font-medium\">${e.title}</h3>\n                    <p class=\"text-sm text-gray-400\">${e.release_date?new Date(e.release_date).getFullYear():\"Sin fecha\"}</p>\n                    <div class=\"flex items-center mt-1\">\n                      <svg class=\"w-4 h-4 text-yellow-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n                        <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\" />\n                      </svg>\n                      <span class=\"ml-1 text-sm text-gray-400\">${e.vote_average.toFixed(1)}/10</span>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            `).join(\"\"),t.classList.remove(\"hidden\")}catch(a){console.error(\"Error al buscar películas:\",a),t.innerHTML=`\n            <div class=\"p-4 text-red-400\">\n              Error al buscar películas. Por favor, intenta de nuevo.\n            </div>\n          `,t.classList.remove(\"hidden\")}},300)}),document.addEventListener(\"click\",s=>{!n.contains(s.target)&&!t.contains(s.target)&&t.classList.add(\"hidden\")}));"],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/pages/peliculas/index.astro?astro&type=script&index=0&lang.ts","const l=document.getElementById(\"searchForm\"),o=document.getElementById(\"moviesGrid\"),i=document.querySelectorAll(\"[data-genre]\");l?.addEventListener(\"submit\",async t=>{t.preventDefault();const s=new FormData(t.target).get(\"query\");if(s)try{const r=await(await fetch(`/api/search?query=${encodeURIComponent(s)}`)).json();n(r)}catch(a){console.error(\"Error searching movies:\",a)}});i.forEach(t=>{t.addEventListener(\"click\",async()=>{const e=t.getAttribute(\"data-genre\");if(e)try{const a=await(await fetch(`/api/movies?genre=${e}`)).json();n(a)}catch(s){console.error(\"Error filtering movies:\",s)}})});function n(t){o&&(o.innerHTML=t.map(e=>`\n        <a\n          href=\"/peliculas/${e.id}\"\n          class=\"group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow\"\n        >\n          <div class=\"relative aspect-[2/3]\">\n            <img\n              src=\"${getPosterUrl(e.poster_path)}\"\n              alt=\"${e.title}\"\n              class=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300\"\n            />\n            <div class=\"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity\">\n              <div class=\"absolute bottom-0 left-0 right-0 p-4 text-white\">\n                <div class=\"flex items-center gap-2 mb-2\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 text-yellow-400\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                    <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\" />\n                  </svg>\n                  <span>${e.vote_average.toFixed(1)}</span>\n                </div>\n                <h3 class=\"font-semibold line-clamp-2\">${e.title}</h3>\n              </div>\n            </div>\n          </div>\n          <div class=\"p-4\">\n            <h3 class=\"font-semibold text-gray-900 mb-2 line-clamp-2\">${e.title}</h3>\n            <p class=\"text-sm text-gray-600 line-clamp-2\">${e.overview}</p>\n            <div class=\"mt-4 flex items-center justify-between\">\n              <span class=\"text-sm text-gray-500\">${new Date(e.release_date).getFullYear()}</span>\n              <div class=\"flex flex-wrap gap-2\">\n                ${e.genre_ids.slice(0,2).map(s=>{const a=genres.find(r=>r.id===s);return a?`\n                    <span class=\"text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full\">\n                      ${a.name}\n                    </span>\n                  `:\"\"}).join(\"\")}\n              </div>\n            </div>\n          </div>\n        </a>\n      `).join(\"\"))}"],["C:/Users/seba2/OneDrive/Escritorio/Programas UC/Diseño Apps Web avanzado/2025-1-s1-g9-t5/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\")});"]],"assets":["/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/about/index.html","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/api/movies","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/api/search","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/genres/index.html","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/history/index.html","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/movies/search/index.html","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/movies/index.html","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/peliculas/index.html","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/watchlist/index.html","/file:///C:/Users/seba2/OneDrive/Escritorio/Programas%20UC/Dise%C3%B1o%20Apps%20Web%20avanzado/2025-1-s1-g9-t5/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"WqcoEt5ugMtUUGA2h0OaQWYWNbpUtD6B8SNzUzazgRg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
