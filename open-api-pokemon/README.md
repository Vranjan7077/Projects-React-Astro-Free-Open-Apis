## 🕹️ Project - Open Pokemon Project

Build with - [Pokeapi](https://pokeapi.co/). All the Pokémon data you'll ever need in one place, easily accessible through a modern free open-source RESTful API.

This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon. We specifically cover the video game franchise. Using this website, you can consume information on Pokémon, their moves, abilities, types, egg groups and much, much more.

## 🔗 Topics

Showing below data from the official documentation:

- Pokémon Evolution Chains
- Abilities
- Types
- Pokémon (including various forms)
- Location Area
- Docs - [Get here](https://pokeapi.co/docs/v2)

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/Vranjan7077/Projects-React-Astro-Free-Open-Apis.git
```

## 🧞 Commands

Install all the required dependencies and start the dev server:

| Command               | Action                                      |
| :-------------------- | :------------------------------------------ |
| `cd open-api-pokemon` | Navigate inside the folder                  |
| `npm install`         | Installs dependencies                       |
| `npm run dev`         | Starts local dev server at `localhost:1000` |
| `npm run build`       | Build your production site to `./dist/`     |

## 📓 Folder Structure

```
└── 📁src
    └── App.jsx
    └── 📁components
        └── 📁BasicDetails
            └── PokemonBasicDetails.jsx
            └── PokemonDetails.jsx
            └── PokemonFullDetail.jsx
            └── PokemonStats.jsx
            └── _BasicDetailsCard.scss
        └── 📁Encounters
            └── EncounterLocationArea.jsx
            └── Encounters.jsx
            └── _Encounters.scss
        └── 📁Evolution
            └── PokemonEvolutionChain.jsx
            └── _EvolutionChain.scss
        └── 📁global
            └── Footer.jsx
            └── Header.jsx
            └── _index.scss
        └── 📁Other
            └── RenderButton.jsx
            └── RenderList.jsx
            └── RenderSection.jsx
        └── 📁Pokemon
            └── Pokemon.jsx
            └── PokemonCard.jsx
            └── _PokemonCard.scss
    └── 📁hooks
        └── usePokemon.jsx
        └── usePokemonEncounters.jsx
        └── usePokemonLocations.jsx
    └── index.css
    └── 📁layouts
        └── RootLayout.jsx
    └── main.jsx
    └── 📁pages
        └── Homepage.jsx
        └── _pages.scss
    └── 📁routes
        └── RoutesConfig.jsx
    └── 📁utils
        └── constants.jsx
```

## 💻 Environments

### Project Flow

When landing on the default page, you will see a list of about 12 Pokémon available, along with a "Load More" button to load additional data. Clicking on any Pokémon will redirect you to its details page, where you can view the following information:

```html
<ul>
  <li>Pokémon Image with name and ID</li>
  <li>Types</li>
  <li>Abilities</li>
  <li>Moves</li>
  <li>Stats</li>
  <li>Evolution Chain</li>
</ul>
```

When clicking on any Pokémon in the evolution chain, you will be shown its data. To return to its basic form, click on that Pokémon, and you will be redirected to its location area page, where you can also view and click on other Pokémon.

Repo Link : [See Here](https://github.com/Vranjan7077/Projects-React-Astro-Free-Open-Apis/tree/master/open-api-pokemon)

## 🧑‍🎓Demo

[Live URL](https://open-api-demo-pokemon.netlify.app/)
