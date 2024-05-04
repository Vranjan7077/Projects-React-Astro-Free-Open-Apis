import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";

import MealMenu from "../pages/TmdbMealMenuPage";

import Layout from "../layouts/Layout";
import TmdbHomePage from "../pages/TmdbHomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<TmdbHomePage />} />
      <Route path="meals/meal/:mealId" element={<MealMenu />} />
      <Route
        path="*"
        element={
          <Suspense fallback={<p className="success">Loading...</p>}>
            <main className="not-found">
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
