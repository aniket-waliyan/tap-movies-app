import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function AddMovie() {
    const [formFields, setFormFields] = useState({});
    const history = useHistory();

    const handleFormFields = (event) => {
        const { value, name, type } = event.target;

        setFormFields({
            ...formFields,
            [name]: type === 'number' ? Number(value) : value
        });
    };

    const addMovieHandler = async () => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/movies/addMovie',
                formFields
            );
            console.log(response);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Movie Title"
                        name="title"
                        onChange={handleFormFields}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ratings">
                    <Form.Label>Ratings</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Movie Ratings"
                        name="rating"
                        onChange={handleFormFields}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Year of release</Form.Label>
                    <Form.Control
                        type="number"
                        name="year_of_release"
                        placeholder="Year of release"
                        onChange={handleFormFields}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="poster">
                    <Form.Label>Poster URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Movie Poster URL"
                        name="poster"
                        onChange={handleFormFields}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        type="text"
                        name="genre"
                        placeholder="Genre"
                        onChange={handleFormFields}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="button"
                    onClick={addMovieHandler}
                >
                    Add Movie
                </Button>
            </Form>
        </>
    );
}

export default AddMovie;
