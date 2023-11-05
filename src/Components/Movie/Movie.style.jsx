import React from 'react';
import { movies } from './movieDummy';
import {useState} from 'react';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster_path: PropTypes.string.isRequired,
	vote_average: PropTypes.number.isRequired,
  };

function Movie({title, poster_path, vote_average}) {

   const [isHovering, setIsHovering] = useState(null);

	const handleMouseOver = index => {
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(null);
	};
	return (
		<div className = 'movie-container'>
			<img src={IMG_BASE_URL + poster_path} alt='영화포스터'/>
			<h4>{title}</h4>
			<p>{vote_average}</p>
		</div>
	);
}

/* export default Movie; */

/* 스타일 컴포넌트 적용 */

//import React, { useState } from 'react';
//import {useState} from 'react'
//import React from 'react'
//import styled from 'styled-components';
// import {
//    Body,
//    AppContainer,
//    MovieContainer,
//    MovieImage,
// 	MovieDetails,
// 	MovieTitle,
// 	MovieDescription,
// 	MovieItem
// } from './styles';

function Movies() {
	const [isHovering, setIsHovering] = useState(null);

	const handleMouseOver = index => {
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(null);
	};

	return (
      <div className='app-container'>
         {movies.results.map((item, index) => (
      <div
         key={item.id}
         className='movie-item'
         onMouseOver={() => handleMouseOver(index)}
         onMouseOut={handleMouseOut}
      >
      <div className='movie-container'>
        <img src={IMG_BASE_URL + item.poster_path} alt='영화포스터' />
        <h4>{item.title}</h4>
        <p>{item.vote_average}</p>
      </div>
      {index === isHovering && (
        <div className='movie-details'>
          <h2>{item.title}</h2>
          <p>{item.overview}</p>
        </div>
      )}
    </div>
  ))}
</div>

	);
}

//export default Movies;

/* export default App; */

