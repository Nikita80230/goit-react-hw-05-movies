import React, { useState } from 'react';
import css from "./MovieItem.module.css"

const MovieItem = ({ movie }) => {
    const [imgSrc, setImgSrc] = useState(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);


    return (
        <div className={css.filmCard}>
            <img src={imgSrc} alt='' onError={() => setImgSrc(require("..//..//images/defaultMoviePoster.png"))} />
            {/* <img src={require("..//..//images/default-avatar.png")} alt="Film 1" /> */}
            <h3>{movie.title || movie.name}</h3>
            <p className={css.overlay} >{movie.overview}</p>
        </div>
    );
};
export default MovieItem;