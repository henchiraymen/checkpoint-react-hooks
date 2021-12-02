import React, { useState } from "react";

import Data from "./components/data/Data";
import MovieList from "./components/movieList/MovieList";
import FilterByTitle from "./components/filter/Filter";
import Rating from "./components/Rating/Rating";
import AddMovie from "./components/addMovie/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(Data);

  // Title to search
  const [title, setTitle] = useState("");
  // Value of the rating on change ( to send to rating.js )
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="App">
      <div className="filter">
        <FilterByTitle title={title} setTitle={setTitle} />
        <Rating
          isFilter={true}
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
        />
      </div>
      <AddMovie movies={movies} setMovies={setMovies} />
      <MovieList movies={movies} title={title} ratingValue={ratingValue} />
    </div>
  );
}

export default App;
