import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";

const usePokemonEncounters = (name) => {
  const [encounters, setEncounters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      return;
    }

    const fetchEncounters = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}/pokemon/${name}/encounters`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch Pokémon encounters for ${name}`);
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length === 0) {
          throw new Error(`No encounters found for ${name}`);
        }
        setEncounters(data);
      } catch (error) {
        setError(
          error.message ||
            `Something went wrong while fetching Pokémon encounters for ${name}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEncounters();
  }, [name]);

  return { encounters, loading, error };
};

export default usePokemonEncounters;
