import React, { useEffect, useState } from 'react';
import { getMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';

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
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;
