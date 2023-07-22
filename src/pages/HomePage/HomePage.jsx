import React, { lazy, useEffect, useState } from 'react';
import { getMovies } from 'services/api';
import { Link } from 'react-router-dom';

// const MovieItem = lazy(() => ('components/MovieItem/MovieItem'))
const MovieItem = lazy(() => new Promise((resolve, reject) => {
    import('components/MovieItem/MovieItem')
        .then(result => resolve(result.default ? result : { default: result }))
        .catch(reject)
}));

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getMovies();
                setMovies(moviesData.results);
            } catch (error) {
                setError(error);
            } finally {
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="homePage">
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
