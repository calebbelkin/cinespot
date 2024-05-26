import React from 'react';
import { useState } from 'react';
import './MovieComponent.css'
import { useSelector, useDispatch } from 'react-redux';
import { setColor, enableColorChange, disableColorChange, setLastClickedId } from './Redux/textSlice';
import MovieCard from './MovieCard';
import Star from './assets/star.svg'

function Movie ( { id, title, image, rating, releaseDate, overview} ) {
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

  const toggleFav = () => {
    setIsClicked(!isClicked)
  }

  const handleMouseHover = (e) => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="movie-container">
        <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt="Poster"
            onError={(err) => console.log('img error', err.target)}
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseLeave}
        />
        <div>
            <div className="year-and-rating">
                <div className="year">{year}</div>
                <div className="rating-container">
                    <span>{trueRating}</span>
                    {/* <img className="rating-star" src={Star} alt="Star" /> */}
                    <button onClick={toggleFav} style={{ backgroundColor : isClicked ? 'yellow' : 'white' }}>Favorite</button>
                </div>
            </div>
            <div className="title">{title}</div>
        </div>
        {isHovering && (
            <div className="movie-card">
                <MovieCard
                    id={id}
                    title={title}
                    image={image}
                    rating={rating}
                    releaseDate={releaseDate}
                    overview={overview}
                />
            </div>
        )}
    </div>
);
}

export default Movie;
