const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMoviesCastById } = require('services/api');

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    // const [isCastOpened, setIsCastOpened] = useState(null)

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
        // console.log(movieCastData);
        fetchMoviesById();
    }, [movieId]);

    return (
        <ul>
            {cast.map((actor) => {
                return (<li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
                    <p>{actor.name}</p>
                </li>)
            })}
        </ul>
    );
};
