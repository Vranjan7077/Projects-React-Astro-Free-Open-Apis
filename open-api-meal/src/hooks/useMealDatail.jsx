import { useEffect, useState } from "react";
import { TMDB_MEAL_DETAILS_URL } from "../utils/constants";

const useMealDetail = (mealId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${TMDB_MEAL_DETAILS_URL}?i=${mealId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch meal details");
        }
        const data = await response.json();
        setMealDetails(data.meals ? data.meals[0] : null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (mealId) {
      fetchMealDetails();
    }
  }, [mealId]);

  return { loading, error, mealDetails };
};

export default useMealDetail;
