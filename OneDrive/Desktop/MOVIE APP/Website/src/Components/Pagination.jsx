
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const range = 3;

  const start = Math.max(1, currentPage - range);
  const end = Math.min(totalPages, currentPage + range);

  const pages = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );

  return (
    <div className="flex justify-center mt-4 flex-wrap gap-1">

      <button
        className="btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        First
      </button>

      <button
        className="btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {start > 1 && (
        <button className="btn btn-disabled">
          ...
        </button>
      )}

      {pages.map((page) => (
        <button
          className={`btn ${page === currentPage ? "btn-primary" : ""}`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {end < totalPages && (
        <button className="btn btn-disabled">
          ...
        </button>
      )}

      <button
        className="btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>

      <button
        className="btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        Last
      </button>

    </div>
  );
};

export default Pagination;
