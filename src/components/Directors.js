import React from "react";
import { directors } from "../data";

function Directors() {



  return <div>
    <h1>Directors Page</h1>
    { directors.map((director,i)=>{
    return(
      <div key={i}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie,j)=><li key={j}>{movie}</li>)}
        </ul>
        </div>
    )
  }) }

  </div>;
}

export default Directors;
