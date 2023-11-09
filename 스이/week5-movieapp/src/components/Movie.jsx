import MovieDesc from "./MovieDesc";

function Movie({ posterPath, title, voteAverage, overview }) {
  return (
    <div className="movie-container">
      <img src={posterPath} alt={title} />
      <div className="title-container">
        <h5>{title}</h5>
        <span>{voteAverage}</span>
      </div>
      <MovieDesc title={title} overview={overview} />
    </div>
  );
}

export default Movie;
