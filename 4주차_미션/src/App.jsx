import { movies } from "./api";
import { App_container } from "./App.style";
import { Background_color } from "./App.style";
import { Image } from "./App.style";
import { Border } from "./App.style";
import { Image_container } from "./App.style";
import { Overview } from "./App.style";
import { Box } from "./App.style";
import { Title } from "./App.style";
import { Vote_average } from "./App.style";


export const getImageUrl = (path, size = 200) => {
  return `https://image.tmdb.org/t/p/w${size}/${path}`;
};

function App() {
  return (
    <Background_color>
      <App_container>
        {movies.results.map((movie) => {
          return (
            <Border>
              <Image_container>
                <Image src={getImageUrl(movie.poster_path)} alt="movie poster" />
                <Overview className="overview">
                  <p>{movie.title}</p>
                  {movie.overview}
                </Overview>
              </Image_container>
              <Box>
                <Title>{movie.title}</Title>
                <Vote_average>{movie.vote_average}</Vote_average>
              </Box>
            </Border>
          );
        })}
      </App_container>
    </Background_color>
  );
}

export default App;
