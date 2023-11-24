import * as S from "./Movie.style"
import Overview from "../Overview/Overview";
import { useNavigate } from "react-router-dom";

function Movie({ title, vote, posterPath, originalTitle, overview}) {
    const imageUrl = `https://image.tmdb.org/t/p/w${500}/${posterPath}`;
    const navigate = useNavigate();

    const onClickImg = () => {
        navigate(`/movie/${title}`, {
            state: { imageUrl, originalTitle, overview }
        });
    };
    
    return (
        <S.Movie onClick={onClickImg}>
            <img src={imageUrl} alt="title"></img>
            <S.movieInfo>
                <h5>{title}</h5>
                <span className="vote">{vote}</span>
            </S.movieInfo>
            <Overview title={title} originaltitle={originalTitle} overview={overview}></Overview>
        </S.Movie>
    )
}

export default Movie;