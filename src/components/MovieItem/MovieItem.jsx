import React from 'react';
import css from './MovieItem.module.css';
import defaultImg from 'images/defaultMoviePoster.png';

const MovieItem = ({ movie }) => {
    return (
        <div className={css.filmCard}>
            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : defaultImg
                }
                alt={movie.title}
            />
            <h3>{movie.title || movie.name}</h3>
            <p className={css.overlay}>{movie.overview}</p>
        </div>
    );
};
export default MovieItem;
