
import React from 'react';

const MovieTrailer = ({ trailerKey, onClose }) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box w-full max-w-3xl bg-base-100">

        <h2 className="text-xl font-bold mb-4">
          Movie Trailer
        </h2>

        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title="Movie Trailer"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="modal-action">
          <button
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

export default MovieTrailer;
