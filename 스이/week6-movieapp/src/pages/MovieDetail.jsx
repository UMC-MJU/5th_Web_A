import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="moviedetail">
      <img src={state.img} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}
