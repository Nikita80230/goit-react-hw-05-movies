import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import HomePage from 'pages/HomePage/HomePage';

// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));

const Reviews = lazy(() => new Promise((resolve, reject) => {
  import("./Reviews/Reviews")
    .then(result => resolve(result.default ? result : { default: result }))
    .catch(reject)
}));

const Cast = lazy(() => new Promise((resolve, reject) => {
  import("./Cast/Cast")
    .then(result => resolve(result.default ? result : { default: result }))
    .catch(reject)
}));

// const Cast = lazy(() => import("./Cast/Cast"));

// const OtherComponent = lazy(() => new Promise((resolve, reject) => {
//   import('./OtherComponent')
//     .then(result => resolve(result.default ? result : { default: result }))
//     .catch(reject);
// }));
// const MyComponent = lazy(() => import('./MyComponent'))

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
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>

  );
};
