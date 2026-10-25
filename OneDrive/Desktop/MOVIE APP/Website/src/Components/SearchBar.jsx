
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <div className="flex gap-2 ">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search movies..."
          className="input input-success w-full "
        />

        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
