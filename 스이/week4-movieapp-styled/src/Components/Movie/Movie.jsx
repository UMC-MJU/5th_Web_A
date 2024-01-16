import React from 'react';
import PropTypes from 'prop-types';
import MovieHover from '../MovieHover/MovieHover';
import * as S from './Movie.style';

function Movie({ posterPath, title, voteAverage, overview }) {
  return (
    <S.Container>
      <img src={posterPath} alt={title} />
      <S.Title>
        <h5>{title}</h5>
        <span>{voteAverage}</span>
      </S.Title>
      <MovieHover title={title} overview={overview} />
    </S.Container>
  );
}

// props의 유효성을 검사하는 코드
Movie.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;
