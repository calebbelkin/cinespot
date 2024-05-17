import React from 'react';
import { useState } from 'react';
import './MovieComponent.css'
import Star from './assets/star.svg'
import { useSelector, useDispatch } from 'react-redux';
import { setColor, enableColorChange, disableColorChange, setLastClickedId } from './Redux/textSlice';
import MovieCard from './MovieCard';

function Movie ( { id, title, image, rating, releaseDate} ) {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  
  // const { color, canChangeColor, lastClickedId} = useSelector((state) => state.textColor); // Destructure to access both state fields
  // const dispatch = useDispatch();

  const trueRating = Math.round(rating * 10) / 10
  const year = releaseDate.slice(0, 4)
  // const def = defaultImage

  // console.log('line 13', isClicked)

  // const handleMouseEnter = (e) => {
  //   setIsHovering(true)
  // // }
  // console.log('23',lastClickedId)

  // style={{ color: lastClickedId === id ? 'white' : 'black' }} title redux color test 

  // const handleClick = () => {
  //   if (canChangeColor) {
  //     dispatch(setLastClickedId(id));
  //     dispatch(disableColorChange());
  //   }
  //   else {
  //     dispatch(setLastClickedId(1));
  //     dispatch(setLastClickedId(id))
  //     dispatch(enableColorChange())
  //   }
  // };

  const handleMouseHover = (e) => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className='movie-container'>
      <img className='poster' src={`https://image.tmdb.org/t/p/w500${image}`} height='500px' width='350px' alt="Italian Trulli" onError={(err) => console.log('img error', err.target)} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}/>
      {/* <div className='hover menu'>
      </div> */}
     <div>
     <div className='year-and-rating'> {year}
     <span className='rating'>{trueRating} </span>
     {/* <button onClick={handleClick}>
      Click Me
     </button> */}
      </div>
      <div className='title' >
      {title}</div>
      </div> 
      {isHovering && <div className="movie-card"><MovieCard /></div>}
    </div> 
  );
}

export default Movie;
