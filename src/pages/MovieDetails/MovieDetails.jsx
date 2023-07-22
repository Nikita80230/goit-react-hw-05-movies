
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

    return (
        <>
            {movie && <MovieCard movie={movie} />}
            <br />
            <br />
            <br />

            <Link to={location.pathname.includes('cast') ? "" : "cast"}>
                <h3>CAST</h3>
            </Link>

            <Link to={location.pathname.includes('reviews') ? "" : "reviews"}>
                <h3>REVIEWS</h3>
            </Link>

            <Outlet />
        </>
    );
};
export default MovieDetails;
