import { useParams } from "react-router-dom";
import { movieData } from './Moviemain'; 
import "./Detail.css"


function Detail({ data }) {
  const { id } = useParams();
  const movie = data.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>영화 정보가 없습니다.</div>;
  }

  return (
    <div>
      <img className="detail_img"src={movieData(200, movie.poster_path)} alt={movie.title} />
      <h1>{movie.title}</h1>
    </div>
  );
}

export default Detail;
