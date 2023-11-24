import { useNavigate } from "react-router-dom";
import * as S from "./NotFound.style";

function NotFound() {
    const navigate = useNavigate();

    return(
        <S.NotFound>
            <h1>해당 페이지를 찾지 못했습니다.</h1>
            <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
            <button onClick={() => navigate('/')}>메인 페이지로 이동</button>
        </S.NotFound>
    )
}

export default NotFound;