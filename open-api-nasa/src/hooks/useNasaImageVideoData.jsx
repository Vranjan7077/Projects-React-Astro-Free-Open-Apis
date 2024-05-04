import { useState, useMemo } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NASA_IMG_VID_URL } from "../utils/constants";

const useNasaImageVideoData = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const NASA_IMG_VID_CACHE_KEY = useMemo(() => "NASA-IMG-VID-CACHE", []);

  const searchImageOrVideo = async (query) => {
    setIsLoading(true);
    try {
      const cachedData = localStorage.getItem(NASA_IMG_VID_CACHE_KEY);
      if (cachedData) {
        const cachedResults = JSON.parse(cachedData);
        setSearchResults(cachedResults);
      }
      const data = await fetch(`${NASA_IMG_VID_URL}/search?q=${query}`);
      if (!data.ok) {
        throw new Error("Failed to fetch data. Please try again later.");
      }
      const json = await data.json();
      const items = json.collection.items;

      const resultsWithImages = await Promise.all(
        items.map(async (item) => {
          const imageUrl =
            item.links && item.links[0] ? item.links[0].href : "";
          return { ...item, imageUrl };
        })
      );

      setSearchResults(resultsWithImages);
      localStorage.setItem(
        NASA_IMG_VID_CACHE_KEY,
        JSON.stringify(resultsWithImages)
      );
      toast.success("🚀 Data fetched successfully");
    } catch (err) {
      toast.error(err.message || "Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchResults,
    isLoading,
    searchImageOrVideo,
  };
};

export default useNasaImageVideoData;
