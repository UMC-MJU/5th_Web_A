import { tvPrograms } from "../tvDummy";
import TVProgram from "../Components/TV/TVProgram";
import * as S from "./TV.style"

function TV() {
    return (
        <S.appContainer>
            {
                tvPrograms.results.map((item) => {
                    return (
                        <S.tvContainer>
                            <TVProgram title={item.name} vote={item.vote_average} posterPath={item.poster_path} originalTitle={item.original_name} overview={item.overview}></TVProgram>
                        </S.tvContainer>
                    )
                })
            }
        </S.appContainer>
    )
}

export default TV;