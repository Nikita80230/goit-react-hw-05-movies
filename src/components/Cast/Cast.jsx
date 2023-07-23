import { Loader } from 'components/Loader/Loader';

const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMoviesCastById } = require('services/api');

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        if (!movieId) return;

        const fetchMoviesById = async () => {
            try {
                setLoading(true)
                const movieCastData = await getMoviesCastById(movieId.slice(1));
                setCast(movieCastData.cast);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        };
        fetchMoviesById();
    }, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            {cast.length !== 0 ? (
                <ul>
                    {cast.map(actor => {
                        return (
                            <li key={actor.id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                    alt=""
                                />
                                <p>{actor.name}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <h3>{error}</h3>
            )}
        </div>
    )
};

export default Cast;
