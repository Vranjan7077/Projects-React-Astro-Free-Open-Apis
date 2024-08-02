/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";

const useAdviceHook = () => {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAdvice = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      setError(error.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdvice();

    const intervalId = setInterval(fetchAdvice, 10000);

    return () => clearInterval(intervalId);
  }, [fetchAdvice]);

  return { advice, loading, error, fetchAdvice };
};

export default useAdviceHook;
