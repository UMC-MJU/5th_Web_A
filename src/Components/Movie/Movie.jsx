import React from 'react';
import { movies } from './movieDummy';
import PropTypes from 'prop-types';

import {useState} from 'react';
//import Movie from './Components/Movie/Movie';
//import {movies} from './Components/Movie/movieDummy'; // 무비더미의 데이터를 가져옴


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
		<><div className='app-container'>
			{movies.results.map((item, index) => (
				<div
					key={item.id}
					className='movie-item'
					onMouseOver={() => handleMouseOver(index)}
					onMouseOut={handleMouseOut}
				>
					<Movie
						poster_path={item.poster_path}
						title={item.title}
						vote_average={item.vote_average}
						isHovered={index === isHovering} // 현재 hover된 영화인지 확인하는 props 전달
					/>
					{index === isHovering && (
						<div className='movie-details'>
							<h2>{item.title}</h2>
							<p>overview={item.overview}</p>
						</div>
					)}
				</div>
			))}
		</div><div className='movie-container'>
				<img src={IMG_BASE_URL + poster_path} alt='영화포스터' />
				<h4>{title}</h4>
				<p>{vote_average}</p>
			</div></>	
	);
}

export default Movie;

