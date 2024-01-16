import Movie from "../components/Movie";
import { movies } from "../movieDummy";

export const getImageUrl = (path, size = 200) => {
  return `https://image.tmdb.org/t/p/w${size}/${path}`;
};

function Movies() {
  return (
    <div className="app-container">
      {movies.results.map((movie) => {
        return (
          <Movie
            key={movie.id}
            posterPath={getImageUrl(movie.poster_path)}
            title={movie.title}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        );
      })}
    </div>
  );
}

export default Movies;
