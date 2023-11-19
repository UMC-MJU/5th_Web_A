import React from 'react';
import {} from 'react-router-dom'
import Header from '../Components/Header';
import { tvdummy } from './tvDummy';
import {useState} from 'react';
//import { useNavigate } from 'react-router-dom';
import { AppContainer, MovieOverview, MovieContainer, MovieDetails, MovieImg, MovieTitle, MovieVoteaverage } from '../Components/Movie/Movies.style'
//import { AppContainer,MovieContainer,MovieImg, MovieTitle, MovieVoteaverage} from '../Components/Movie/Movies.style'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

function TV() {
	const [isHovering, setIsHovering] = useState(null);

	const handleMouseOver = index => {
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(null);
	};
	
	return (
		<div><Header/>
      <AppContainer>
         {tvdummy.results.map((item, index) => (
      <MovieContainer
         key={item.id}
         onMouseOver={() => handleMouseOver(index)}
         onMouseOut={handleMouseOut}
      >
        <MovieImg src={IMG_BASE_URL + item.poster_path} alt='tv포스터' />
        <MovieTitle>{item.name}</MovieTitle>
        <MovieVoteaverage>{item.vote_average}</MovieVoteaverage>
		{index === isHovering && (
			<MovieDetails>
			<MovieTitle>{item.title}</MovieTitle>
			<MovieOverview>{item.overview}</MovieOverview>
			</MovieDetails>
		)}
    </MovieContainer>
  ))}
</AppContainer>
</div>
	);
}

export default TV;