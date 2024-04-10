import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './MovieHover.style';

const MovieHover = ({ title, overview }) => {
  const [display, setDisplay] = useState(false);

  return (
    <Container
      onMouseOver={() => setDisplay(true)} //마우스 포인터가 요소 안으로 들어올 때
      onMouseOut={() => setDisplay(false)} //마우스 포인터가 요소 밖으로 나갈 때
    >
      {display && (
        <div>
          <h5>{title}</h5>
          <p>{overview}</p>
        </div>
      )}
    </Container>
  );
};

// props의 유효성을 검사하는 코드
MovieHover.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieHover;
