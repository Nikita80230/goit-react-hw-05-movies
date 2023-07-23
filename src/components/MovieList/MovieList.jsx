import React, { lazy } from 'react'
import { Link, useLocation } from 'react-router-dom';

const MovieItem = lazy(() => new Promise((resolve, reject) => {
    import('components/MovieItem/MovieItem')
        .then(result => resolve(result.default ? result : { default: result }))
        .catch(reject)
}));

const MovieList = ({ movies }) => {
    const location = useLocation();


    return (
        <>
            {
                movies.map(movie => {
                    return (
                        <Link key={movie.id} to={`/movies/:${movie.id}`} state={{ from: location }}>
                            <MovieItem movie={movie} />
                        </Link>
                    )
                })
            }
        </>
    )
}

export default MovieList;
