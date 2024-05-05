import { useState } from "react";
import useRandomImage from "../hooks/useRandomImage";

const useSearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z]/g, "");
    setSearchQuery(inputValue);
  };

  return { searchQuery, handleInputChange };
};

const useSearchForm = (callback) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return handleSubmit;
};

const RandomImage = () => {
  const { images, loading, error, searchImages } = useRandomImage();
  const { searchQuery, handleInputChange } = useSearchInput();
  const handleSubmit = useSearchForm(() => searchImages(searchQuery));

  return (
    <div className="center">
      <form onSubmit={handleSubmit} className="random-search">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter something to search..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="masonry-layout">
        {images.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.regular}
            alt={photo.alt_description}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default RandomImage;
