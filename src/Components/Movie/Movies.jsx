import React from 'react';
import { dummy } from './movieDummy';
import PropTypes from 'prop-types';
import Header from '../Header';
//import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
//import { AppContainer, MovieOverview, MovieContainer, MovieDetails, MovieImg, MovieTitle, MovieVoteaverage } from './Movies.style'
import { AppContainer,MovieContainer,MovieImg, MovieTitle, MovieVoteaverage } from './Movies.style'



const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

Movies.propTypes = {
	title: PropTypes.string.isRequired,
	poster_path: PropTypes.string.isRequired,
	vote_average: PropTypes.number.isRequired,
  };
  
function Movies(title, poster_path) {
	/* const [isHovering, setIsHovering] = useState(null);

	const handleMouseOver = index => {
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(null);
	}; */

	const navigate = useNavigate();
	
	const onClickImg = () => {
    navigate(`/dummy/${title}`), {
            state: {title, poster_path},
        }
		console.log("hi");
  };
	
	return (
		<div><Header/>
      <AppContainer>
         {dummy.results.map((item, /* index */) => (
      <MovieContainer
         key={item.id}
        //  onMouseOver={() => handleMouseOver(index)}
        //  onMouseOut={handleMouseOut}
      >
        <MovieImg src={IMG_BASE_URL + item.poster_path} alt='영화포스터'  onClick={onClickImg} />
        <MovieTitle>{item.title}</MovieTitle>
        <MovieVoteaverage>{item.vote_average}</MovieVoteaverage>
		{/* {index === isHovering && (
			<MovieDetails>
			<MovieTitle>{item.title}</MovieTitle>
			<MovieOverview>{item.overview}</MovieOverview>
			</MovieDetails>
		)} */}
		{/* <MovieImg src={dummy.poster_path} alt={dummy.title} /> */}
    </MovieContainer>
  ))}
</AppContainer>
</div>
	);
}

export default Movies;

