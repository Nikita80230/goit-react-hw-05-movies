import { MovieItem } from 'components/MovieItem/MovieItem';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { getMoviesByName } from 'services/api';

// import css from "./MoviesPage.module.css"

export const MoviesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);



    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: searchTerm });
    };

    const query = searchParams.get('query')

    useEffect(() => {

        if (!query) return;

        const fetchMovies = async () => {
            try {
                const moviesData = await getMoviesByName(query);
                setMovies(moviesData.results);
                console.log(moviesData.results);
            } catch (error) {
                setError(error);
            } finally {
                console.log('fetch worked');
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
                <button type="submit">
                    Search
                </button>
            </form>
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

export default MoviesPage;
