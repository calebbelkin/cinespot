import React from 'react';
import { useState } from 'react';
import './MovieComponent.css'

function Movie ( { id, title, image, rating, releaseDate} ) {
  const [isHovering, setIsHovering] = useState(false)

  const trueRating = Math.round(rating * 10) / 10
  const year = releaseDate.slice(0, 4)

  const handleMouseEnter = (e) => {
    setIsHovering(true)
  }

  return (
    <div >
      <img id='poster' src={`https://image.tmdb.org/t/p/w500${image}`} height='500px' width='350px' alt="Italian Trulli" onMouseEnter={handleMouseEnter}/>
      <div className='hover menu'>
        {trueRating}
      </div>
     <div className='movieInfo'>
     <div>{title}</div>
        <div>{year}</div>
      </div> 
    </div> 
  );
}

export default Movie;