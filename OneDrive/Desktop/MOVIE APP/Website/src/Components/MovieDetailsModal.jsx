
import React from 'react';

const MovieDetailsModal = ({
  movie,
  onClose,
  isFavorite,
  onToggleFavorites,
  openTrailer
}) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  return (
    <div className="modal modal-open">
      <div className="modal-box w-full max-w-2xl sm:max-w-3xl bg-base-100 shadow-xl">

        <h3 className="font-bold text-xl sm:text-2xl mb-4">
          {movie.title}
        </h3>

        <img
          src={posterUrl}
          alt={movie.title}
          className="rounded-lg mb-4 w-full object-contain max-h-96"
        />

        <div>
          <p className="leading-relaxed mb-4">
            {movie.overview || "No description available."}
          </p>

          <p className="font-semibold mb-2">
            Release Date: {movie.release_date || "N/A"}
          </p>

          <p className="font-semibold mb-2">
            Rating: {movie.vote_average ?? "N/A"}
          </p>

          <p className="mb-2">
            Genres:{" "}
            {movie.genres?.length
              ? movie.genres.map((g) => g.name).join(", ")
              : "N/A"}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-end mt-6">

          {/* Watch Trailer */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openTrailer(movie.id)}
          >
            Watch Trailer
          </button>

          {/* Favorites */}
          <button
            type="button"
            onClick={() => onToggleFavorites(movie)}
            className={`btn ${
              isFavorite ? "btn-error" : "btn-secondary"
            }`}
          >
            {isFavorite
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>

          {/* Close */}
          <button
            type="button"
            className="btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
