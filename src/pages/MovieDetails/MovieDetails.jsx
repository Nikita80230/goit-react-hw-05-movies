import BackButton from 'components/BackButton/BackButton';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMoviesById } from 'services/api';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [movie, setMovie] = useState({});

    const location = useLocation();
    const backLinkHref = location?.state?.from ?? '/';

    useEffect(() => {
        if (!movieId) return;

        const fetchMoviesById = async () => {
            try {
                setLoading(true)
                const movieData = await getMoviesById(movieId.slice(1));
                setMovie(movieData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        };
        fetchMoviesById();
    }, [movieId]);

    return (
        <>
            {loading && <Loader />}
            {error && <h3>{error}</h3>}
            <br />
            <br />
            <Link to={backLinkHref}>
                <BackButton />
            </Link>
            <br />
            <br />
            {movie && <MovieCard movie={movie} />}
            <br />
            <br />
            <Link
                state={{ from: backLinkHref }}
                to={location.pathname.includes('cast') ? '' : 'cast'}
            >
                <h3>CAST</h3>
            </Link>
            <br />
            <Link
                state={{ from: backLinkHref }}
                to={location.pathname.includes('reviews') ? '' : 'reviews'}
            >
                <h3>REVIEWS</h3>
            </Link>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};
export default MovieDetails;
