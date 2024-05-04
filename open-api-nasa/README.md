## 🕹️ Project - Open Api Nasa Project

This project includes the [NASA Oepn API's](https://api.nasa.gov/) build with React + Vite and plugins used in this project are

- [React - Toastify](https://www.npmjs.com/package/react-toastify)

- [React - Date Picker](https://www.npmjs.com/package/react-datepicker)

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## 🔗 Topics

Showing below data from the official documentation:

- Astronomy Photo of the Day (APOD)
- NASA Image and Video Library

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/Vranjan7077/Projects-React-Astro-Free-Open-Apis.git
```

## 🧞 Commands

Install all the required dependencies and start the dev server:

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `cd open-api-nasa` | Navigate inside the folder                  |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:1000` |
| `npm run build`    | Build your production site to `./dist/`     |

## 📓 Folder Structure

```
└── 📁src
    └── App.jsx
    └── 📁components
        └── 📁card
            └── NasaApodCard.jsx
            └── NasaSearchCard.jsx
        └── NasaApod.jsx
        └── NasaForm.jsx
        └── NasaHeader.jsx
        └── NasaImgVideo.jsx
        └── NasaSearch.jsx
    └── 📁hooks
        └── useNasaApodData.jsx
        └── useNasaImageVideoData.jsx
    └── index.css
    └── main.jsx
    └── 📁utils
        └── constants.jsx
```

## 💻 Environments

By defautl i'm using only one `.env` for `development` and `production`. You need to create the environment file and add the `key` and `value` for it access it.

My Key : `VITE_NASA_API_KEY`

Repo Link : [See Here](https://github.com/Vranjan7077/Projects-React-Astro-Free-Open-Apis/tree/master/open-api-nasa)

## 🧑‍🎓Demo

[Live URL](https://open-api-demo-nasa.netlify.app/)
