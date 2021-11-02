import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import SearchBar from '../Components/SearchBar';
import Loader from '../Components/Loader';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');
    const history = useHistory();

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(
                `http://localhost:4000/api/movies?searchText=${searchText}`
            );
            setMovies(data);
        } catch (error) {
            setError(`Server Error : ${error.message}`);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText]);

    const onClickViewMovie = ({ id }) => {
        history.push(`/${id}`);
    };

    return (
        <>
            <SearchBar setSearchText={setSearchText} />
            {error && <p>{error}</p>}
            {loading ? (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: '100vh' }}
                >
                    <Loader />
                </div>
            ) : (
                <div className="d-flex flex-wrap justify-content-start">
                    {movies.map((movie) => {
                        const { title, id, genre, rating } = movie;

                        return (
                            <Card
                                key={id}
                                className="shadow  m-4 movie-card bg-white rounded"
                            >
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <hr></hr>
                                    <Card.Text>
                                        <p>
                                            {' '}
                                            <b>IMDB Rating:</b> {rating}
                                        </p>
                                        <b> Genre: </b> {genre}
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => onClickViewMovie(movie)}
                                    >
                                        Movie Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default Home;
