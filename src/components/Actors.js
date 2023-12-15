import React from "react";
import { actors } from "../data";



function Actors() {
 


  return <div>
    <h1>Actors Page</h1>
    
    {actors.map((actor,i)=>{
    return(
      <div key={i}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie,j)=><li key={j}>{movie}</li>)}
        </ul>
        </div>
    )
  })}
    
    </div>;
}

export default Actors;
