import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout";

// Pages
import HomePage from "../pages/Homepage";

// Components
import Encounters from "../components/Encounters/Encounters";
import EncounterLocationArea from "../components/Encounters/EncounterLocationArea";
import PokemonFullDetail from "../components/BasicDetails/PokemonFullDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="pokemon/:name"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <PokemonFullDetail />
          </Suspense>
        }
      />
      <Route
        path="pokemon/:name/encounters"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Encounters />
          </Suspense>
        }
      />
      <Route
        path="location-area/:name"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <EncounterLocationArea />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <main className="not-found container">
              <h1>
                Oops! You seem to be lost. <br />
                And No results found
              </h1>
              <p>We could not find what you searched for.</p>
              <p>Try searching again.</p>
              <br />
              <Link to="/">Home 👈</Link>
            </main>
          </Suspense>
        }
      />
    </Route>
  )
);

export default function RoutesConfig() {
  return <RouterProvider router={router} />;
}
