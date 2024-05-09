import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";

const usePokemonLocations = (name) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE_URL}/location-area/${name}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [name]);

  return { location, isLoading, error };
};

export default usePokemonLocations;
