import { movies } from "../movieDummy";
import Movie from "../Components/Movie/Movie";
import * as S from "./Movies.style";

function Movies() {
    return (
        <S.appContainer>
            {
                movies.results.map((item) => {
                    return (
                        <S.movieContainer>
                            <Movie title={item.title} vote={item.vote_average} posterPath={item.poster_path} originalTitle={item.original_title} overview={item.overview}></Movie>
                        </S.movieContainer>
                    )
                })
            }
        </S.appContainer>
    )
}

export default Movies;