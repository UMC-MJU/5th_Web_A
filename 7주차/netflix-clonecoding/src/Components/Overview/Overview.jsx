import * as S from "./Oveview.style.jsx"

function Overview(props) {
    return (
        <S.Overview>
            <h4>{props.title}</h4>
            <h5>{props.originaltitle}</h5>
            <S.overviewText>{props.overview}</S.overviewText>
        </S.Overview>
    )
}

export default Overview;