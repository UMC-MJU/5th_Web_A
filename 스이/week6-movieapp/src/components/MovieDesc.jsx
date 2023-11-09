import { useState } from "react";

function MovieDesc({ title, overview }) {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className="desc-container"
      onMouseOver={() => setDisplay(true)} //마우스 포인터가 요소 안으로 들어올 때
      onMouseOut={() => setDisplay(false)} //마우스 포인터가 요소 밖으로 나갈 때
    >
      {display && (
        <div>
          <h5>{title}</h5>
          <p>{overview}</p>
        </div>
      )}
    </div>
  );
}

export default MovieDesc;
