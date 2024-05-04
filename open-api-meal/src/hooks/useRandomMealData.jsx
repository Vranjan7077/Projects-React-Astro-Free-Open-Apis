import { useState } from "react";
import { TMDB_RANDOM_URL } from "../utils/constants";

const useRandomMealData = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeal = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${TMDB_RANDOM_URL}`);
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setMeal(data.meals[0]);
        setError(null);
      } else {
        setMeal(null);
        setError("No meal found");
      }
    } catch (error) {
      setError("Error fetching meal");
    } finally {
      setLoading(false);
    }
  };

  return { meal, loading, error, fetchMeal };
};

export default useRandomMealData;
