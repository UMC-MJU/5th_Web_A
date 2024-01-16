import VideoDesc from "./VideoDesc";
import { useNavigate } from "react-router-dom";

function Video({ posterPath, title, voteAverage, overview }) {
  const navigate = useNavigate();

  const onClickImg = () => {
    if (window.location.href.includes("/movie")) {
      navigate(`/movie/${title}`, {
        state: { img: posterPath, title },
      });
    } else if (window.location.href.includes("/tv")) {
      navigate(`/tv/${title}`, {
        state: { img: posterPath, title },
      });
    }
  };

  return (
    <div className="video-container" onClick={onClickImg}>
      <img src={posterPath} alt={title} />
      <div className="title-container">
        <h5>{title}</h5>
        <span>{voteAverage}</span>
      </div>
      <VideoDesc title={title} overview={overview} />
    </div>
  );
}

export default Video;
