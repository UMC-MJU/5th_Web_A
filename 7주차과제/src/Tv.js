import React from "react";
import { Link } from "react-router-dom";

function Tv({ data }) {

  const getImageUrl = (path, size = 200) => {
    return `https://image.tmdb.org/t/p/w${size}/${path}`;
  };
  return (
    <div className="layout">
      {data &&
        data.map((datas) => (
          <div className="border" key={datas.id}>
            <Link to={`/detail/${datas.id}`}>
              <div className="image_container">
                <img src={getImageUrl(datas.poster_path)} alt="movie poster" />

                <div className="overview">
                  <p>{datas.title}</p>
                  {datas.overview}
                </div>
              </div>
              <div className="box">
                <div className="title">{datas.name}</div>
                <div className="vote_average">{datas.vote_average}</div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Tv;
