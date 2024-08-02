import { useState, useEffect } from "react";
import useAdviceHook from "./hooks/useAdviceHook";

function App() {
  const { advice, loading, error, fetchAdvice } = useAdviceHook();
  const [bgColor, setBgColor] = useState(getRandomColor());

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchAdvice();
      setBgColor(getRandomColor());
    }, 10000);

    return () => clearInterval(intervalId);
  }, [fetchAdvice]);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="card">
        <h1 className="heading">
          {loading ? "Loading..." : error ? `Error: ${error}` : advice?.advice}
        </h1>
      </div>
    </div>
  );
}

export default App;
