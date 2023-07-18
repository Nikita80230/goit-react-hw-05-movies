
import React from 'react';

// import css from "./MoviesPage.module.css"



export const MoviesPage = () => {
    return (
        <div>
            <h1>Movie page</h1>
            <form action="" >
                <label htmlFor="">Search Movie</label>
                <br />
                <input type="text" placeholder='Enter film name' />
                <br />
                <button type='submit'>Search</button>
            </form>

        </div>
    );
};

export default MoviesPage;
