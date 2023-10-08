import React from 'react';
import { useState } from 'react';
import Movie from './Components/Movie';
import {movies} from './movieDummy'; //무비더미의 데이터를 가져옴

function App() {

  const [isHovering, setIsHovering] = useState(null);

  const handleMouseOver = (index) => {
    setIsHovering(index);
  };

  const handleMouseOut = () => {
    setIsHovering(null);
  };

  return (
    <div>
      <div className="app-container">
        {movies.results.map((item, index) => (
            <div
              key={item.id}
              className = "movie-item"
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
              <div className="movie-details">
                <h2>{item.title}</h2>
                <p>overview={item.overview}</p>
              </div>
            )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
