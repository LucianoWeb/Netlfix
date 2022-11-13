import React from 'react';
import '../../styles/Movie.css';

const Movie = ({movie}) => {
    const imageUrl = "https://image.tmdb.org/t/p/w200" + movie.poster_path;
    return ( 
        <li className='moviecard'>
            <img className='movieimg' src={imageUrl} alt={movie.title} />
           <div className='text-center py-2'>{movie.title}</div> 
            </li>
     );
}
 
export default Movie;