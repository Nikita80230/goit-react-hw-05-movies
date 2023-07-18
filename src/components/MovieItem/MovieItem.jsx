import React from 'react';
import css from "./MovieItem.module.css"

export const MovieItem = ({ movie }) => {
    return (
        <div className={css.filmCard}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Film 1" />
            <h3>{movie.title || movie.name}</h3>
            <p>{movie.overview}</p>
        </div>
    );
};
