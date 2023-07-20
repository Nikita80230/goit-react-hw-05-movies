import { MovieCard } from 'components/MovieCard/MovieCard';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getMoviesById } from 'services/api';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    // const [isCastOpened, setIsCastOpened] = useState()

    // const handleCastClick = (prevIsCastOpened) => {
    //     setIsCastOpened(!prevIsCastOpened)
    // }

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

    return (
        <>
            {movie && <MovieCard movie={movie} />}
            <br />
            <br />
            <br />
            <Link to="cast">Cast</Link>
            <Outlet />
        </>
    );
};
export default MovieDetails;
