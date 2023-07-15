import React, { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import axios from 'axios';
import { getData } from 'services/api';

export const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null)

    useEffect((() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getData();
                setError(moviesData)
            } catch (error) {
                setError(error)
            } finally {
                console.log("fetch worked")
            }
        }
        fetchMovies()
    }), []);

    return (
        <div>
            <MovieItem />
            <MovieItem />
        </div>
    );
};

export default HomePage;
