/* eslint-disable react/prop-types */
import { useState } from "react";
import TmdbCard from "../components/cards/TmdbCard";

const TmdbSearch = ({ searchResults, isLoading, isError, searchMeal }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchType, setSearchType] = useState("name");

  const handleInputChange = (e) => {
    const filteredValue = e.target.value.replace(/[^a-zA-Z]/g, "");
    setInputValue(filteredValue);
    setSearchType(filteredValue.trim().length === 1 ? "firstLetter" : "name");
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      await searchMeal(trimmedValue, searchType);
      setInputValue("");
    }
  };

  return (
    <div className="wrapper--tmdbsearch">
      <h3>Search meal by name or by first letter</h3>
      <form className="tmdb-search-form" onSubmit={handleSearchSubmit}>
        <select value={searchType} onChange={() => {}}>
          <option value="name">Search by Name</option>
          <option value="firstLetter">Search by First Letter</option>
        </select>
        <input
          type="text"
          placeholder="Search query..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="search"
          disabled={!inputValue || isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
      {isLoading && <p className="success">Loading...</p>}
      {isError && <p className="error">Error: {isError}</p>}
      {searchResults.map((meal) => (
        <TmdbCard
          key={meal.idMeal}
          data={meal}
          height={350}
          width={350}
          className="custom"
          showLink={true}
        />
      ))}
    </div>
  );
};

export default TmdbSearch;
