import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import '../../styles/Movie.css';


const Body = () => {
    const [movies, setMovies ] = useState([])
    useEffect(() =>{
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2M5MmFjOTdhMGVkZjM0NWM5ZDY5YjBiMDI1ZTMwNyIsInN1YiI6IjYzNDY5NmI0ZjYyMWIyMDA3ZWQwYmJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-aDrNkfGMLu2N0_uMBBRZQfijI6_e697_McScPoKqV0',
                "Content-Type" : "application/json;charset=utf-8"
            }, 
        }).then(result => result.json()).then(data => {
            setMovies(data.results);
            
        });
    }, []);

    return (
        <main>
            <ul className='moviegrid'>
                {movies.map((movie) =>
                    <Movie key={movie.id} movie={movie} />
                )};
            </ul>
        </main>
    );
}

export default Body;