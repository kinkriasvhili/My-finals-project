// pages/Gallery.jsx
import React, { useState } from "react";
import useDataLoader from "../hooks/useFetch";
import "./gallery.css";

const Gallery = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const {
    fetchedData: photos,
    isLoading,
    fetchError,
  } = useDataLoader("https://jsonplaceholder.typicode.com/photos?_limit=4");

  const handleFavoriteToggle = (photo) => {
    const updated = favorites.some((f) => f.id === photo.id)
      ? favorites.filter((f) => f.id !== photo.id)
      : [...favorites, photo];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  if (isLoading) return <p>Loading images...</p>;
  if (fetchError) return <p>Request failed: {fetchError}</p>;

  return (
    <div className="gal-container">
      <h2>Image Collection</h2>
      <div className="gal-grid">
        {photos.map((img) => (
          <div key={img.id} className="gal-item">
            <img src={img.thumbnailUrl} alt={img.title} />
            <div>{img.title}</div>
            <button
              className={
                favorites.some((f) => f.id === img.id)
                  ? "removeBtn"
                  : "bookMarkBtn"
              }
              onClick={() => handleFavoriteToggle(img)}
            >
              {favorites.some((f) => f.id === img.id) ? "Remove" : "Bookmark"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
