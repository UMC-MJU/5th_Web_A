import { useLocation, useParams } from "react-router-dom";
import * as S from "./TVDetail.style"

function TVDetail() {
    const { title } = useParams();
    const { state } = useLocation();

    return (
        <S.TVDetail>
            <img src={state.imageUrl} alt={title}></img>
            <S.TVInfo>
                <h1>{title}</h1>
                <p>{state.overview}</p>
            </S.TVInfo>
        </S.TVDetail>
    )
}

export default TVDetail;