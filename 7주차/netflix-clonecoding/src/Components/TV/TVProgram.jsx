import { useNavigate } from "react-router-dom";
import * as S from "./TVProgram.style"
import Overview from "../Overview/Overview";

function TVProgram ({ title, vote, posterPath, originalTitle, overview }) {
    const imageUrl = `https://image.tmdb.org/t/p/w${500}/${posterPath}`
    const navigate = useNavigate();

    const onClickImg = () => {
        navigate(`/tv/${title}`, {
            state: { imageUrl, originalTitle, overview }
        })
    }

    return (
        <S.TVProgram onClick={onClickImg}>
            <img src={imageUrl} alt="title"></img>
            <S.programInfo>
                <h5>{title}</h5>
                <span className="vote">{vote}</span>
            </S.programInfo>
            <Overview title={title} originalTitle={originalTitle} overview={overview}></Overview>
        </S.TVProgram>
    )
}

export default TVProgram;