
import { MovieCard } from 'components/MovieCard/MovieCard';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMoviesById } from 'services/api';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    let location = useLocation();

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

    console.log(location);
    return (
        <>
            {movie && <MovieCard movie={movie} />}
            <br />
            <br />
            <br />
            {location.pathname.includes('cast') ? (
                <Link to="">
                    <h3>CAST</h3>
                </Link>
            ) : (
                <Link to="cast">
                    <h3>CAST</h3>
                </Link>
            )}
            <Outlet />
        </>
    );
};
export default MovieDetails;
