/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import NasaSearchCard from "./card/NasaSearchCard";

const NasaSearch = ({ searchResults, isLoading, searchImageOrVideo }) => {
  const [inputValue, setInputValue] = useState("");
  const searchText = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const query = searchText.current.value.trim();
    if (query) {
      await searchImageOrVideo(query);
      setInputValue("");
    }
  };

  return (
    <>
      <form className="nasa-form" onSubmit={handleSearchSubmit}>
        <input
          ref={searchText}
          type="text"
          placeholder="Search Image or Video..."
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
      <div className="search-results">
        {searchResults.length > 0 && <h2>Search Results</h2>}
        <ul className="card-list">
          {searchResults.map((item, index) => (
            <NasaSearchCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default NasaSearch;
