import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));

const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <div>
        <header>
          <h1>Film Website</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
