import React, { useEffect, useState } from 'react';
import { getMovies } from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const moviesData = await getMovies();
                setMovies(moviesData.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="homePage">
            {loading && <Loader />}
            {error && <h3>{error}</h3>}
            <MovieList movies={movies} />

        </div>
    );
};

export default HomePage;
