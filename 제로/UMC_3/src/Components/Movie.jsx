import React from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"

function Movie({title, poster_path, vote_average}) {
    return (
      <div className = 'movie-container'>
        <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
        <h4>{title}</h4>
        <p>{vote_average}</p>
        </div>
    )
  }

  
  
  export default Movie;
  