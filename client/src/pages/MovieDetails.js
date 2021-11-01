import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MovieDetails() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});

    const fetchMovieDetails = async (movieId) => {
        const response = await axios.get(
            `http://localhost:4000/api/movies/${movieId}`
        );

        setMovieDetails(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchMovieDetails(movieId);
    }, []);

    return (
        <Card className="bg-dark text-white">
            <Card.Img
                src="https://via.placeholder.com/720"
                height="720"
                width="400px"
                alt="Card image"
            />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default MovieDetails;
