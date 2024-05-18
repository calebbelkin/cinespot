import React from 'react';
import './MainPage.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Movie from './MovieComponent';
import MovieGrid from './MovieGrid';
import Button from '@mui/material/Button';



function MainPage() {
    const [currentSearch, setCurrentSearch] = useState('');
    const [movieData , setMovieData] = useState([])

    const retriveSearch = async () => {
      const QuereyParam = currentSearch;
      console.log('line 13 RB', QuereyParam)
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${QuereyParam}&language=en-US&api_key=530e59adb476a9d4d8f46f031c75093e`)

if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const data = await response.json();
console.log('line 21 data', data);
setMovieData(data.results);
      } catch (error) {
        console.log('Error posting data:', error);
      }
    }

    const getData = () => {
        fetch('http://localhost:4321/movielist')
        
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();  // Parses the body text as JSON
        })
        .then(data => {
          // console.log(data)
          setMovieData(data.results)
     
          // console.log('moviedata[0]', movieData[0].results[0].title)
        })
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
        });
    }
    // event handler for the onsubmit event
    // when the form is submitted handleclick shoudld be called
    const handleClick = (e) => {
        // method is called on e,  to prevent the form from performing its default submit action, which is to reload the page.
        e.preventDefault();
        console.log(currentSearch)
        retriveSearch();  
        setCurrentSearch('')
    }

    useEffect(() => {
        getData();
    }, []);



    let navigate = useNavigate();


  const handleLoginNav = () => {
    navigate('/login')
  }


  console.log('line62', movieData)
  const movieDetails = movieData.map(movie => {
    if (movie.poster_path == null) {return null 
    }
    return (
      <Movie key={movie.id} id={movie.id} title={movie.title} releaseDate={movie.release_date} image={movie.poster_path} rating={movie.vote_average} overview={movie.overview} />
    )
});

    return (
      <div > 
        <header className='header'>
          <form className='form' onSubmit={handleClick}> 
            <input type="text" className="search-bar" name="search" value={currentSearch} placeholder='Seach Movies' onChange={(e) => setCurrentSearch(e.target.value)}/>
            <input type="submit" value="" placeholder='' className='submit-btn' onClick={console.log('clicked')}/>
          </form> 
          <Button className='login' variant="outlined" onClick={handleLoginNav}>Login</Button>;
          </header>
        <div className='backdrop'>
          <MovieGrid movieDetails={movieDetails}/>
        </div>
      </div>
    );
  }

export default MainPage;


// onChange defined an event handler for the input field, it is called eveytime somethin is typed in the input field 
// e (on change) is the event object
// e (handle click) represents the event object for the on submit event 
//handler function: a function designed to respond to specific events or actions 
// 