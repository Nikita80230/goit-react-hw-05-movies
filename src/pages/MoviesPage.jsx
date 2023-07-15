import { MovieCard } from 'components/MovieCard/MovieCard';
import React from 'react'

export const MoviesPage = () => {
    return (
        <>
            <header>
                <h1>Movie page</h1>
            </header>
            <main>
                <MovieCard />
            </main>
        </>
    )
}

export default MoviesPage;