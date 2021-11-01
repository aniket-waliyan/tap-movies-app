const { Op } = require('sequelize');

const db = require('../config/configPG');

const { Movies } = db;

const getMovies = async (req, res) => {
    const { searchText } = req.query;
    console.log(searchText);
    try {
        const conditions = searchText
            ? {
                  where: {
                      title: {
                          [Op.iRegexp]: searchText
                      }
                  }
              }
            : {};
        const movies = await Movies.findAll(conditions);
        return res.json(movies);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
};

const getMovie = async (req, res) => {
    const { movieId } = req.params;

    try {
        const movie = await Movies.findOne({
            where: {
                id: Number(movieId)
            }
        });
        if (!movie) throw new Error('Movie Not Found');
        res.json({
            message: 'Movie Found',
            movie
        });
    } catch (e) {
        res.status(404).json({
            message: e.message
        });
    }
};

const addMovie = async (req, res) => {
    try {
        const { title, rating, poster } = req.body;

        await Movies.create({
            title,
            rating,
            poster
        });

        res.status(200).json({
            success: true,
            message: 'successfully added'
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getMovies,
    getMovie,
    addMovie
};
