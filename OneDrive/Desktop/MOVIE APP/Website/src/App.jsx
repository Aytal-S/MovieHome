
import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import Spinner from './Components/Spinner';
import ErrorMessage from './Components/ErrorMessage';
import MovieCard from './Components/MovieCard';
import MovieDetailsModal from './Components/MovieDetailsModal';
import Pagination from './Components/Pagination';
import MovieTrailer from './Components/MovieTrailer';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [view, setView] = useState("search");
  const [trailerKey, setTrailerKey] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // Load Favorites
  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem("favorites");

      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites);

        setFavorites(
          Array.isArray(parsedFavorites) ? parsedFavorites : []
        );
      } else {
        setFavorites([]);
      }
    } catch (error) {
      console.error("Favorites loading error:", error);
      setFavorites([]);
      localStorage.removeItem("favorites");
    } finally {
      setInitialized(true);
    }
  }, []);

  // Save Favorites
  useEffect(() => {
    if (initialized) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, initialized]);

  // Fetch Movies
  useEffect(() => {
    if (view === "favorites") {
      setMovies([]);
      setError(null);
      setLoading(false);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!API_KEY) {
          throw new Error("API key missing. Check your .env file.");
        }

        let url;

        if (searchTerm.trim()) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}&page=${page}`;
        } else {
          url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`TMDB API error: ${res.status}`);
        }

        const data = await res.json();

        setMovies(data.results || []);
        setTotalPages(Math.min(data.total_pages || 0, 500));

      } catch (err) {
        console.error("Movie fetch error:", err);
        setError(err.message || "Failed to fetch movies.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, page, view]);

  // Search Handler
  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  // Pagination Handler
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Open Movie Details
  const openModal = async (movieId) => {
    setError(null);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch movie details");
      }

      const data = await res.json();

      setSelectedMovie(data);

    } catch (err) {
      console.error(err);
      setError("Failed to fetch movie details");
    }
  };

  // Open Movie Trailer
  const openTrailer = async (movieId) => {
    setError(null);
    setTrailerKey(null);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch trailer");
      }

      const data = await res.json();

      const trailer = data.results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer" &&
          video.official
      ) || data.results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      } else {
        setError("Trailer not available for this movie.");
      }

    } catch (err) {
      console.error(err);
      setError("Failed to fetch trailer.");
    }
  };

  // Close Trailer
  const closeTrailer = () => {
    setTrailerKey(null);
  };

  // Close Movie Details
  const closeModal = () => {
    setSelectedMovie(null);
  };

  // Toggle Favorites
  const toggleFavorite = (movie) => {
    const exists = favorites.some((f) => f.id === movie.id);

    if (exists) {
      setFavorites((prev) =>
        prev.filter((f) => f.id !== movie.id)
      );
    } else {
      const favMovie = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average
      };

      setFavorites((prev) => [...prev, favMovie]);
    }
  };

  // Check Favorite
  const isFavorite = (movieId) =>
    favorites.some((f) => f.id === movieId);

  const displaymovies = view === "search" ? movies : favorites;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center text-center ">

      <h1 className="text-4xl font-extrabold mb-6 drop-shadow-2xl ">
        MovieHome
      </h1>

      {/* Tabs */}
      <div className="tabs tabs-border mb-6">

        <a
          className={`tab text-lg ${view === "search" ? "tab-active" : ""}`}
          onClick={() => {
            setView("search");
            setPage(1);
          }}
        >
          Search / Popular
        </a>

        <a
          className={`tab text-lg ${view === "favorites" ? "tab-active" : ""}`}
          onClick={() => {
            setView("favorites");
          }}
        >
          Favorites ({favorites.length})
        </a>

      </div>

      {/* Search */}
      {view === "search" && (
        <div className="w-full max-w-md mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>
      )}

      {/* Loading */}
      {loading && <Spinner />}

      {/* Error */}
      {error && <ErrorMessage message={error} />}

      {/* Empty Movies */}
      {!loading && !error && displaymovies.length === 0 && (
        <div>
          No movies found.
          {view === "favorites"
            ? "Add some to your favorites!"
            : "Try a different search."}
        </div>
      )}

      {/* Movie Cards */}
      {!loading && !error && displaymovies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">

          {displaymovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleFavorites={toggleFavorite}
              isFavorite={isFavorite(movie.id)}
              onViewDetails={openModal}
            />
          ))}

        </div>
      )}

      {/* Pagination */}
      {view === "search" && totalPages > 1 && !loading && !error && (
        <div className="mt-6">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      
{/* Movie Details Modal */}
{selectedMovie && !trailerKey && (
  <MovieDetailsModal
    movie={selectedMovie}
    onClose={closeModal}
    isFavorite={isFavorite(selectedMovie.id)}
    onToggleFavorites={toggleFavorite}
    openTrailer={openTrailer}
  />
)}

{/* Trailer Modal */}
{trailerKey && (
  <MovieTrailer
    trailerKey={trailerKey}
    onClose={closeTrailer}
  />
)}


      {/* Trailer Modal */}
      {trailerKey && (
        <MovieTrailer
          trailerKey={trailerKey}
          onClose={closeTrailer}
        />
      )}

    </div>
  );
};

export default App;
