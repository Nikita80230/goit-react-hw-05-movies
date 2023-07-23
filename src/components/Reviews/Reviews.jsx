import { Loader } from 'components/Loader/Loader';

const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMoviesReviewsById } = require('services/api');

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if (!movieId) return;

        const fetchMoviesById = async () => {
            try {
                setLoading(true);
                const movieReviewsData = await getMoviesReviewsById(movieId.slice(1));
                setReviews(movieReviewsData.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMoviesById();
    }, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            {reviews.length !== 0 ? (
                <ul>
                    {reviews.map(review => {
                        return (
                            <li key={review.id}>
                                <h3>{review.author}</h3>
                                <p>{review.content}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <h3>{error}</h3>
            )}
        </div>
    );
};

export default Reviews;
