import { useState } from "react";
import { QUOTE_KEY } from "../utils/constants";

const useRandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await customFetch(`${QUOTE_KEY}/qotd`);
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      const quoteText = data.quote.body || "No quote available";
      const author = data.quote.author || "Unknown Author";
      const tags = data.quote.tags || [];
      setQuote({ text: quoteText, author: author, tags: tags });
      setLoading(false);
    } catch (error) {
      setError("Error fetching quote");
      setLoading(false);
    }
  };

  return { quote, loading, error, fetchQuote };
};

const customFetch = async (url) => {
  const response = await fetch(url);
  return response;
};

export default useRandomQuote;
