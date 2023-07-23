import React, { useEffect, useState } from 'react';
import { getMovies } from 'services/api';
// import { Link, useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';

// const MovieItem = lazy(() => ('components/MovieItem/MovieItem'))
// const MovieItem = lazy(() => new Promise((resolve, reject) => {
//     import('components/MovieItem/MovieItem')
//         .then(result => resolve(result.default ? result : { default: result }))
//         .catch(reject)
// }));

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    // const location = useLocation()
    // console.log("Home Page location", location)

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
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;
