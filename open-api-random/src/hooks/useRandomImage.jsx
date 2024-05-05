import { useState } from "react";
import { UNSPLASH_URL } from "../utils/constants";

const useRandomImage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchImages = async (query) => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.REACT_APP_UNSPLASH_API_KEY;
      const page = 20;
      const response = await fetch(
        `${UNSPLASH_URL}/search/photos?query=${query}&client_id=${apiKey}&page=1&per_page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      setImages(data.results);
      setLoading(false);
    } catch (error) {
      setError("Something wrong occurred...");
      setLoading(false);
    }
  };

  return { images, loading, error, searchImages };
};

export default useRandomImage;
