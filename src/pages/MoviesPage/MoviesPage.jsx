import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesByName } from 'services/api';

export const MoviesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: searchTerm });
    };
    const query = searchParams.get('query');

    useEffect(() => {


        if (!query) return;

        const fetchMovies = async () => {
            try {
                setLoading(true)
                const moviesData = await getMoviesByName(query);
                setMovies(moviesData.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        };
        fetchMovies();
    }, [query]);

    return (
        <div>
            <h1>Movie page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Search Movie</label>
                <br />
                <input
                    onChange={handleChange}
                    name="input"
                    value={searchTerm}
                    type="text"
                    placeholder="Enter film name"
                />
                <br />
                <button type="submit">Search</button>
            </form>
            {loading && <Loader />}
            {error && <h3>{error}</h3>}
            <MovieList movies={movies} />
        </div>
    );
};

export default MoviesPage;
