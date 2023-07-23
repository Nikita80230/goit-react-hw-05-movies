const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMoviesReviewsById } = require('services/api');

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        const fetchMoviesById = async () => {
            try {
                const movieReviewsData = await getMoviesReviewsById(movieId.slice(1));
                setReviews(movieReviewsData.results);
            } catch (error) {
                console.log(error);
            } finally {
            }
        };
        fetchMoviesById();
    }, [movieId]);

    return reviews.length !== 0 ? (
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
        <h3>There are no reviews of this film</h3>
    );
};

export default Reviews;
