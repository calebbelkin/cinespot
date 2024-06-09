import React from 'react';
import { useState, useEffect } from 'react';
import '../styling/MovieComponent.css'
import { useSelector, useDispatch } from 'react-redux';
import { setColor, enableColorChange, disableColorChange, setLastClickedId } from '../Redux/textSlice';
import MovieCard from './MovieCard';
import { setUsername, setFavorite} from '../Redux/userSlice';
import { current } from '@reduxjs/toolkit';


function Movie ( { id, title, image, rating, releaseDate, overview} ) {
 const [isHovering, setIsHovering] = useState(false)
 const [isClicked, setIsClicked] = useState(false)
 // const [loggedIn, setLoggedIn] = useState('')
 // const [currentId, setCurrentId] = useState('')


 const trueRating = Math.round(rating * 10) / 10
 const year = releaseDate.slice(0, 4)
 const { username, favorite } = useSelector((state) => state.user);
 const dispatch = useDispatch();


 // setCurrentId(id)
 const deleteFavMovie = async () => {
   console.log('delete', isClicked)
   setIsClicked(false)
   try {
     const response = await fetch("http://localhost:4321/user/deletefavorite", {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
           username: username,
           movieId: currMovieData.id
       }),
     });
     const data = await response.json();
     if (response.ok) {
       console.log('favorite  deleted :', data);
   } else {
       console.error('fav movie delete failed:', data);
   }


   } catch (error) {
     console.error("Error sending item:", error);
};
 }


 const currMovieData = {
   id: id,
   title: title,
   image: image,
   rating: rating,
   releaseDate: releaseDate,
   overview: overview
};


 const favMovie = async () => {


   console.log('add', isClicked)


  
   setIsClicked(true)
   try {
     const response = await fetch("http://localhost:4321/user/addfavorite", {
       method: "PATCH",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
           username: username,
           currMovieData: currMovieData
       }),
     });
     const data = await response.json();
     if (response.ok) {
       console.log('favcorite sucessfully sent :', data);
   } else {
       console.error('sendign fav failed:', data);
   }
   } catch (error) {
           console.error("Error sending item:", error);
 };
}


// const delOrFav = () => {
//   if (isClicked) favMovie()
//   else deleteFavMovie()
// }


 return (
   <div className="movie-container">
       <img className="poster"
           src={`https://image.tmdb.org/t/p/w500/${image}`}
           alt="Poster"
           onError={(err) => console.log('img error', err.target)}
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() =>  setIsHovering(false)}
       />
       <div>
           <div className="year-and-rating">
               <div className="year">{year}</div>
               <div className="rating-container">
                   <span>{trueRating}</span>
                   {/* <img className="rating-star" src={Star} alt="Star" /> */}
                  {username && ( <button onClick={() => {
               if (!isClicked) {
                 favMovie();
               } else {
                 deleteFavMovie();
               }
             }} style={{ backgroundColor : isClicked ? 'yellow' : 'white' } }>Favorite</button>)}
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
