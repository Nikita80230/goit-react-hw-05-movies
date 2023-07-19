import { MovieCard } from 'components/MovieCard/MovieCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMoviesById } from 'services/api';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        if (!movieId) return;

        const fetchMoviesById = async () => {
            try {
                const movieData = await getMoviesById(movieId.slice(1));
                setMovie(movieData);
            } catch (error) {
                console.log(error);
            } finally {
            }
        };
        // console.log(movie);
        fetchMoviesById();
    }, [movieId]);

    return movie && <MovieCard movie={movie} />;
};
export default MovieDetails;
