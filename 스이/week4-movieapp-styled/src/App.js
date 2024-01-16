import React from 'react';
import Movie from './Components/Movie/Movie';
import { movies } from './movieDummy';
import { Container } from './App.style';

export const getImageUrl = (path, size = 200) => {
  return `https://image.tmdb.org/t/p/w${size}/${path}`;
};

function App() {
  return (
    <Container>
      {movies.results.map((movie) => {
        return (
          <Movie
            key={movie.id}
            posterPath={getImageUrl(movie.poster_path)}
            title={movie.title}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        );
      })}
    </Container>
  );
}

export default App;
