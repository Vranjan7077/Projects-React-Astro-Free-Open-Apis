import { useState, useMemo } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NASA_APOD_URL } from "../utils/constants";

const useNasaApodData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const NASA_KEY = useMemo(() => import.meta.env.VITE_NASA_API_KEY, []);

  const fetchData = async (selectedDate) => {
    setLoading(true);

    try {
      const URL = `${NASA_APOD_URL}?api_key=${NASA_KEY}&date=${selectedDate}`;
      const localKey = `NASA-APOD-${selectedDate}`;
      const cachedData = localStorage.getItem(localKey);
      if (cachedData) {
        const apiData = JSON.parse(cachedData);
        setData(apiData);
        return;
      }

      if (!selectedDate) {
        localStorage.clear();
        return;
      }

      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const apiData = await res.json();
      localStorage.setItem(localKey, JSON.stringify(apiData));
      setData(apiData);
      toast.success("🚀 Data fetched successfully");
    } catch (err) {
      toast.error(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
};

export default useNasaApodData;
