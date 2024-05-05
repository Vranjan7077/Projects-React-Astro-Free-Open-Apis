import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_PAIvI_4S.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
    isIndex: rawRouteData.isIndex
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B8e_A8KY.js"}],"styles":[{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:where(*,*:before,*:after)[data-astro-cid-sckkx6r4]{margin:0;padding:0;box-sizing:border-box;background:#f8f3ec;font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif}main[data-astro-cid-sckkx6r4]{max-width:1040px;margin-left:auto;margin-right:auto;padding-right:3rem;padding-left:3rem}.random--quote article{padding:1.5rem 2rem;background:#fff;border:1px solid #ccc;border-radius:8px;box-shadow:0 4px 8px #0000001a;margin-top:5%;max-width:100%;width:500px}@media (max-width: 767.98px){.random--quote article{width:100%;padding:1rem}}.random--quote button{width:150px;height:50px;border-radius:20px;font-family:Nunito,sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:2.5px;font-weight:700;margin-top:10px;border:none;outline:1px solid #8c8c8c;box-shadow:0 8px 15px #0000001a;transition:all .3s ease 0s}.random--quote button:hover{box-shadow:#0000003d 0 3px 8px;transform:translateY(-7px);cursor:pointer}.random--quote ul{display:flex;align-items:center;gap:5px;list-style:none;padding:0;margin:0}.random--quote ul li{box-shadow:0 5px 8px #0003;border:1px solid #272822;max-width:100%;letter-spacing:.1em;border-radius:.25em;color:#000;display:inline-block;font-size:.625em;line-height:2em;margin:0 .25em;padding:0 .5em}.random--quote .quote{margin-left:35px;margin-right:35px}@media (max-width: 767.98px){.random--quote .quote{margin-left:unset;margin-right:unset}}.random--quote .quote--content{display:flex;flex-direction:column}.random--quote .quote i.fa.fa-pull-left{margin-right:.5rem}.random--quote .quote i.fa.fa-pull-right{margin-left:.5rem}.random--quote .author{display:flex;align-items:center;font-size:12px;float:right}.random--quote .author img{border-radius:50%;border:1px solid grey;margin-right:8px}.center{display:flex;justify-content:center;align-items:center;margin:20px auto;flex-direction:column}.color-body{height:100px;max-width:100%;width:500px;display:flex;justify-content:center;align-items:center;margin:10px auto;border-radius:10px;box-shadow:0 4px 8px #0000001a}.random-search input{border:1px solid grey;border-radius:4px;color:#8c8c8c!important;height:50px;line-height:50px;padding:0 20px;max-width:100%!important}.random-search button{padding:16px 20px;font-size:1rem;color:#fff;border-radius:5px;background-color:#105bd8;cursor:pointer;border:none;font-weight:600;margin-left:5px;line-height:1em}.random-search button:hover{box-shadow:none;transform:none}.masonry-layout{column-count:3;-moz-column-gap:20px;column-gap:20px;margin:20px auto}@media only screen and (min-width: 768px) and (max-width: 1200px){.masonry-layout{column-count:2}}@media only screen and (max-width: 767.98px){.masonry-layout{column-count:1}}.masonry-layout img{margin-bottom:10px;page-break-inside:avoid;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Projects/React/Projects-React-Astro-Free-Open-Apis/open-api-random/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Bbuqegts.mjs","/src/pages/index.astro":"chunks/pages/index_CtHRqM4p.mjs","\u0000@astrojs-manifest":"manifest_DcpzO1aR.mjs","D:/Projects/React/Projects-React-Astro-Free-Open-Apis/open-api-random/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BPxTLODg.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_k1OaLmzt.mjs","$components/RandomQuote":"_astro/RandomQuote.3qPzbdlO.js","$components/RandomColor":"_astro/RandomColor.DiQb9MjI.js","$components/RandomImage":"_astro/RandomImage.UL0jA0ik.js","/astro/hoisted.js?q=0":"_astro/hoisted.B8e_A8KY.js","@astrojs/react/client.js":"_astro/client.J7s0XX1m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/author-placeholder.jpeg","/favicon.svg","/react.svg","/_astro/client.J7s0XX1m.js","/_astro/constants.Cek9GB2M.js","/_astro/hoisted.B8e_A8KY.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/RandomColor.DiQb9MjI.js","/_astro/RandomImage.UL0jA0ik.js","/_astro/RandomQuote.3qPzbdlO.js"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
