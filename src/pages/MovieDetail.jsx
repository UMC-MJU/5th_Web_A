import React from "react"
import { useLocation, useParams } from 'react-router-dom'
//import {useParams } from 'react-router-dom'



export default function MovieDetail() {
    const { title } = useParams(); 
    const { state } = useLocation();
    console.log(title);
    console.log(state);
		
   return (
    <MovieDetail>
      <img src={state.img} alt={title} />
      <h2>{title}</h2>
    </MovieDetail>
  );
}