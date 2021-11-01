const express = require('express');

const {
    getMovies,
    getMovie,
    addMovie
} = require('../controller/movieController');

const router = express.Router();

router
    .get('/', getMovies)
    .get('/:movieId', getMovie)
    .post('/addMovie', addMovie);

module.exports = router;
