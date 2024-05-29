import React from 'react';
import '../styling/MovieComponent.css'


function MovieGrid( { movieDetails }) {
  return (
    <div className='MovieRows'>
       {movieDetails}
    </div>
  );
}

export default MovieGrid;