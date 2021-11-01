import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

import SearchBar from '../Components/SearchBar';
import Loader from '../Components/Loader';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');

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

    return (
        <>
            <SearchBar setSearchText={setSearchText} />
            {error && <p>{error}</p>}
            {loading ? (
                // change body background color to grey while loading
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: '100vh' }}
                >
                    <Loader />
                </div>
            ) : (
                <div className="d-flex flex-wrap justify-content-start">
                    {movies.map((movie) => {
                        const { title, id } = movie;

                        return (
                            <Card key={id} className="m-3 movie-card">
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </Card.Text>
                                    <Button variant="success">
                                        View Movie
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
