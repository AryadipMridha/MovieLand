import React from "react";
import { useEffect, useState } from "react"; //to fetch data from API
import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard";

//api key 66a14123

const API_KEY = "http://www.omdbapi.com/?apikey=66a14123";

//A static json for testing purposes
const movie1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
};

//main functional component
const App = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(props.firstSearchString);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json(); // this to to get the data from api
    setMovies(data.Search);
  };
  //aysnc means asyncronous  which means it takes some time to fetch the data.

  useEffect(() => {
    searchMovies(props.firstSearchString);
  }, []);

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
