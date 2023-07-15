import React from 'react';
import HomePage from 'pages/HomePage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MoviesPage from 'pages/MoviesPage';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
};
