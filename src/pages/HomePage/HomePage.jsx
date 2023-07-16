import React, { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { getMovies } from 'services/api';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getMovies();
                setMovies(moviesData.data.results);
                console.log(moviesData.data);
            } catch (error) {
                setError(error);
            } finally {
                console.log('fetch worked');
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className='homePage'>
            {error && console.log(error)}
            {movies.map(movie => {
                return (
                    <Link key={movie.id} to={`/movies/:${movie.id}`}>
                        <MovieItem movie={movie} />
                    </Link>
                );
            })}
        </div>
    );
};

export default HomePage;
