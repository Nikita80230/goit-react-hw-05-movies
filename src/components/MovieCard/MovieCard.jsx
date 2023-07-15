import React from 'react'
import css from "./MovieCard.module.css"



export const MovieCard = () => {
    return (
        <div className={css.filmDetails}>
            <div className={css.filmPoster}>
                <img src="https://vscode.dev/github/Nikita80230/goit-react-hw-05-movies/blob/main/src/images/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI%40._V1_FMjpg_UX1000_.jpg" alt="Film 1" />
            </div>
            <div className={css.filmInfo}>
                <h2>Film Title</h2>
                <p>Release Date: January 1, 2023</p>
                <p>Director: John Doe</p>
                <p>Genre: Action</p>
                <p>Duration: 120 minutes</p>
                <p>
                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam vestibulum nulla in ligula lobortis, et posuere enim faucibus.
                    Morbi quis ipsum a arcu luctus consectetur. Suspendisse maximus elit
                    in lectus laoreet, in fringilla turpis malesuada. Mauris non malesuada
                    nunc.
                </p>
            </div>
        </div>
    )
}
