import React from 'react';

export const MovieItem = ({ movie }) => {
    return (
        <div className="film-card">
            <img src={movie.poster_path} alt="Film 1" />
            <h3>{movie.title || movie.name}</h3>
            <p>{movie.overview}</p>
        </div>
    );
};
