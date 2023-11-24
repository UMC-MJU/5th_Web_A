import { useLocation, useParams } from "react-router-dom";
import * as S from "./MovieDetail.style";

function MovieDetail () {
    const  { title } = useParams();
    const { state } = useLocation();

    return (
        <S.MovieDetail>
            <img src={state.imageUrl} alt={title}></img>
            <S.MovieInfo>
                <h1>{title}</h1>
                <p>{state.overview}</p>
            </S.MovieInfo>
        </S.MovieDetail>
    )
}

export default MovieDetail;