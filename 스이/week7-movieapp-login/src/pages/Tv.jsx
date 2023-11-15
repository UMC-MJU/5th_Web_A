import React from "react";
import Video from "../components/Video";
import { tv } from "../tvDummy";

export const getImageUrl = (path, size = 200) => {
  return `https://image.tmdb.org/t/p/w${size}/${path}`;
};

function Tv() {
  return (
    <div className="app-container">
      {tv.results.map((tv) => {
        return (
          <Video
            key={tv.id}
            posterPath={getImageUrl(tv.poster_path)}
            title={tv.name}
            voteAverage={tv.vote_average}
            overview={tv.overview}
          />
        );
      })}
    </div>
  );
}

export default Tv;
