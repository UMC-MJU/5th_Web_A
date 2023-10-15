import React from 'react';
import { movies } from './movieDummy';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

function Movie({title, poster_path, vote_average}) {
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

import React, { useState } from 'react';
import styled from 'styled-components';
import {
   Body,
   AppContainer,
   MovieContainer,
   MovieImage,
	MovieDetails,
	MovieTitle,
	MovieDescription,
	MovieItem
} from './styles';

function App() {
	const [isHovering, setIsHovering] = useState(null);

	const handleMouseOver = index => {
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(null);
	};

	return (
      <Body>
         <AppContainer>
            {movies.results.map((item, index) => (
               <MovieItem
                  key={item.id}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
               >
                  <MovieContainer>
                     <MovieImage src={IMG_BASE_URL + item.poster_path} alt='영화포스터' />
                     {index === isHovering && (
                        <MovieDetails>
                           <MovieTitle>{item.title}</MovieTitle>
                           <MovieDescription>{item.overview}</MovieDescription>
                        </MovieDetails>
                     )}
                  </MovieContainer>
               </MovieItem>
            ))}
         </AppContainer>
      </Body>		
	);
}

/* export default App; */

