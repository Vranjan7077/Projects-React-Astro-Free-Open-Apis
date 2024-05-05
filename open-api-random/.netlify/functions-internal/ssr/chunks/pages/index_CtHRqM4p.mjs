import { e as createComponent, r as renderTemplate, g as addAttribute, h as createAstro, i as renderComponent, j as renderHead, k as renderSlot, m as maybeRenderHead } from '../astro_PAIvI_4S.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Projects/React/Projects-React-Astro-Free-Open-Apis/open-api-random/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="icon" type="image/svg+xml" href="react.svg"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main>  </body> </html>`;
}, "D:/Projects/React/Projects-React-Astro-Free-Open-Apis/open-api-random/src/layouts/Layout.astro", void 0);

const UNSPLASH_URL = "https://api.unsplash.com";
const QUOTE_KEY = "https://favqs.com/api";

const useRandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await customFetch(`${QUOTE_KEY}/qotd`);
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      const quoteText = data.quote.body || "No quote available";
      const author = data.quote.author || "Unknown Author";
      const tags = data.quote.tags || [];
      setQuote({ text: quoteText, author, tags });
      setLoading(false);
    } catch (error2) {
      setError("Error fetching quote");
      setLoading(false);
    }
  };
  return { quote, loading, error, fetchQuote };
};
const customFetch = async (url) => {
  const response = await fetch(url);
  return response;
};

const RandomQuote = () => {
  const { quote, loading, error, fetchQuote } = useRandomQuote();
  return /* @__PURE__ */ jsxs("div", { className: "center", children: [
    /* @__PURE__ */ jsx("button", { className: "button-primary", onClick: fetchQuote, children: "Get Quote 📗" }),
    loading && /* @__PURE__ */ jsx("p", { className: "success", children: "Loading..." }),
    error && /* @__PURE__ */ jsxs("p", { className: "error", children: [
      "Error: ",
      error.message
    ] }),
    !loading && !error && quote && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("article", { children: /* @__PURE__ */ jsxs("div", { className: "quote", children: [
      /* @__PURE__ */ jsx("i", { className: "fa fa-quote-left fa-pull-left" }),
      quote.text,
      /* @__PURE__ */ jsx("i", { className: "fa fa-quote-right fa-pull-right" }),
      quote.author && /* @__PURE__ */ jsxs("div", { className: "quote--content", children: [
        /* @__PURE__ */ jsxs("p", { className: "author", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/author-placeholder.jpeg",
              alt: "Author",
              height: 20,
              width: 20,
              loading: "lazy"
            }
          ),
          quote.author
        ] }),
        quote.tags && /* @__PURE__ */ jsx("ul", { children: quote.tags.map((tag, index) => /* @__PURE__ */ jsx("li", { children: tag }, index)) })
      ] })
    ] }) }) })
  ] });
};

const RandomColor = () => {
  const [color, setColor] = useState("#ffffff");
  const [showColor, setShowColor] = useState(false);
  const generateRandomColor = () => {
    let newColor = "#" + (Math.random() * 16777215 << 0).toString(16);
    if (newColor.length < 7) {
      generateRandomColor();
    } else {
      setColor(newColor);
      setShowColor(true);
    }
  };
  const colorBodyStyle = {
    backgroundColor: color,
    transition: "background-color 0.5s ease"
  };
  return /* @__PURE__ */ jsxs("div", { className: "center", children: [
    /* @__PURE__ */ jsx("button", { className: "button-primary", onClick: generateRandomColor, children: "Generate Color 😈" }),
    showColor && /* @__PURE__ */ jsxs("span", { className: "color-body", style: colorBodyStyle, children: [
      "Hexcode: ",
      color
    ] })
  ] });
};

const useRandomImage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchImages = async (query) => {
    setLoading(true);
    try {
      const page = 20;
      const response = await fetch(
        `${UNSPLASH_URL}/search/photos?query=${query}&client_id=mId7crrR2v5C0NQi-yzIq8XMY5g9tTKN02-ix0cH0FE&page=1&per_page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      setImages(data.results);
      setLoading(false);
    } catch (error2) {
      setError("Something wrong occurred...");
      setLoading(false);
    }
  };
  return { images, loading, error, searchImages };
};

const useSearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z]/g, "");
    setSearchQuery(inputValue);
  };
  return { searchQuery, handleInputChange };
};
const useSearchForm = (callback) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };
  return handleSubmit;
};
const RandomImage = () => {
  const { images, loading, error, searchImages } = useRandomImage();
  const { searchQuery, handleInputChange } = useSearchInput();
  const handleSubmit = useSearchForm(() => searchImages(searchQuery));
  return /* @__PURE__ */ jsxs("div", { className: "center", children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "random-search", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: searchQuery,
          onChange: handleInputChange,
          placeholder: "Enter something to search..."
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "submit", children: "Search" })
    ] }),
    loading && /* @__PURE__ */ jsx("p", { children: "Loading..." }),
    error && /* @__PURE__ */ jsxs("p", { children: [
      "Error: ",
      error
    ] }),
    /* @__PURE__ */ jsx("div", { className: "masonry-layout", children: images.map((photo) => /* @__PURE__ */ jsx(
      "img",
      {
        src: photo.urls.regular,
        alt: photo.alt_description,
        loading: "lazy"
      },
      photo.id
    )) })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "React - Open Free Random Api", "description": "Basic react application which show images from unsplash , random hexcode and random quotes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Astro</h2> <section class="random--quote"> ${renderComponent($$result2, "RandomQuote", RandomQuote, { "client:load": true, "client:component-hydration": "load", "client:component-path": "$components/RandomQuote", "client:component-export": "default" })} ${renderComponent($$result2, "RandomColor", RandomColor, { "client:load": true, "client:component-hydration": "load", "client:component-path": "$components/RandomColor", "client:component-export": "default" })} ${renderComponent($$result2, "RandomImage", RandomImage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "$components/RandomImage", "client:component-export": "default" })} </section> ` })}`;
}, "D:/Projects/React/Projects-React-Astro-Free-Open-Apis/open-api-random/src/pages/index.astro", void 0);

const $$file = "D:/Projects/React/Projects-React-Astro-Free-Open-Apis/open-api-random/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
