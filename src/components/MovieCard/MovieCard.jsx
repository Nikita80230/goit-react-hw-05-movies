import React from 'react'
import css from "./MovieCard.module.css"



export const MovieCard = ({ movie }) => {


    // const { title, release_date, overview, genres, poster_path } = movie;
    // const splitedGenres = movie.genres.map((genre) => { console.log(genre) })

    // console.log(splitedGenres)
    return (

        <div className={css.filmDetails}>
            <div className={css.filmPoster}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Film 1" />
            </div>
            <div className={css.filmInfo}>
                <h2>{movie.title}</h2>
                <p>Release Date: {movie.release_date}</p>
                <p>User Score:</p>
                <p>Genre: {movie.genres && movie.genres.map(({ name }) => name).join(", ")}</p>
                {/* // .split(", "){genres.map(({ name }) => name)} */}


                <p>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}
