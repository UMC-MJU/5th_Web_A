import "./App.css";
import { movies } from "./api";
import { Fragment } from "react";

export const getImageUrl = (path, size = 200) => {
  return `https://image.tmdb.org/t/p/w${size}/${path}`;
};

function App() {
  return (
    <div className="background_color">
      <div className="app-container">
        {movies.results.map((movie) => {
          return (
            <div className="border">
              <div className="image-container">
                <img src={getImageUrl(movie.poster_path)} alt="movie poster" />
                <div className="overview">
                  <p>{movie.title}</p>{movie.overview}</div>
              </div>
              <div className="box">
                <p className="title">{movie.title}</p>
                <p className="vote_average">{movie.vote_average}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
