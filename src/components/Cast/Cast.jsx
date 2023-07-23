const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMoviesCastById } = require('services/api');

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        const fetchMoviesById = async () => {
            try {
                const movieCastData = await getMoviesCastById(movieId.slice(1));
                setCast(movieCastData.cast);
            } catch (error) {
                console.log(error);
            } finally {
            }
        };
        fetchMoviesById();
    }, [movieId]);

    return (
        cast.length !== 0 ? <ul>
            {cast.map((actor) => {
                return (<li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
                    <p>{actor.name}</p>
                </li>)
            })}
        </ul> : <h3> There are no cast of this film</h3>
    );
};

export default Cast;
