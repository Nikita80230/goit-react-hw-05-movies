import React, { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieItem = lazy(() => import('components/MovieItem/MovieItem'));

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <>
            {movies.map(movie => {
                return (
                    <Link
                        key={movie.id}
                        to={`/movies/:${movie.id}`}
                        state={{ from: location }}
                    >
                        <MovieItem movie={movie} />
                    </Link>
                );
            })}
        </>
    );
};

export default MovieList;
