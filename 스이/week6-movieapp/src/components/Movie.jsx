import MovieDesc from "./MovieDesc";
import { useNavigate } from "react-router-dom";

function Movie({ posterPath, title, voteAverage, overview }) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${title}`, {
      state: { img: posterPath, title },
    });
  };

  return (
    <div className="movie-container" onClick={onClickImg}>
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
