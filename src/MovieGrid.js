import React from 'react';
import Movie from './MovieComponent';
import TestGrid from './TestGridComponent';
import './MovieComponent.css';


function MovieGrid( { movieDetails }) {
  return (
    <div className='MovieRows'>
       {movieDetails}
    </div>
  );
}

export default MovieGrid;