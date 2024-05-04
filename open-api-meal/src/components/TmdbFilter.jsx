/* eslint-disable react/prop-types */
import { useState } from "react";
import TmdbCard from "../components/cards/TmdbCard";

const TmdbFilter = ({ filterResults, isLoaded, isErr, filterData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("category");

  const handleSearch = async (event) => {
    event.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery !== "") {
      const searchParam = searchType === "category" ? "category" : "area";
      await filterData(trimmedQuery, searchParam);
    }
  };

  const buttonText = searchType === "category" ? "Category" : "Area";

  return (
    <div className="wrapper--tmdbfilter">
      <h3>Filter by {buttonText}</h3>
      <form className="tmdb-search-form" onSubmit={handleSearch}>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="category">Category</option>
          <option value="area">Area</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Enter ${buttonText}...`}
        />
        <button
          type="submit"
          className="search"
          disabled={isLoaded || !searchQuery.trim()}
        >
          Search by {buttonText}
        </button>
      </form>
      {isErr && <div className="error">Error: {isErr}</div>}
      {filterResults.length > 0 && (
        <ul>
          {filterResults.map((meal) => (
            <TmdbCard
              key={meal.idMeal}
              data={meal}
              height={250}
              width={250}
              isFilterCard={true}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TmdbFilter;
