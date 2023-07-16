import React from 'react';
import HomePage from 'pages/HomePage/HomePage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
