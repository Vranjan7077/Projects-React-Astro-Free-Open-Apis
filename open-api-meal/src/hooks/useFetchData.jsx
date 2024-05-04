import { useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchData = async (query, searchType) => {
    setIsLoading(true);
    setIsError(null);
    try {
      let apiUrl;
      if (searchType === "name") {
        apiUrl = `${url}?s=${encodeURIComponent(query)}`;
      } else if (searchType === "firstLetter") {
        apiUrl = `${url}?f=${encodeURIComponent(query)}`;
      } else if (searchType === "category") {
        apiUrl = `${url}?c=${encodeURIComponent(query)}`;
      } else if (searchType === "area") {
        apiUrl = `${url}?a=${encodeURIComponent(query)}`;
      } else {
        throw new Error("Invalid search type.");
      }

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data. Please try again later.");
      }
      const json = await response.json();
      if (!json || !json.meals) {
        throw new Error("No meals found for the given query.");
      }
      setData(json.meals);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setIsError(error.message);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, fetchData };
};

export default useFetchData;
