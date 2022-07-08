let db = require('../database/models');

let apiController = {
    listMovies: (req, res) => {
        db.Movie
            .findAll()
            .then(movies => {
                return res.status(200).json({
                    total: movies.length,
                    status: 200,
                    data: movies
                })
            })
    },
    getMovie: (req, res) => {
        db.Movie
            .findByPk(req.params.id)
            .then(movie =>{
                return res.status(200).json({
                    status: 200,
                    data: movie,
                    message: 'Movie found'
                })
            })
    },
    createMovie: (req, res) => {
        db.Movie
            .create(req.body)
                .then(movie => {
                    return res.status(201).json({
                        status: 201,
                        data: movie,
                        message: 'Movie created'
                    })
                })
    },
    deleteMovie: (req, res) => {
        db.Movie
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(movie => {
                return res.status(200).json({
                    status: 200,
                    message: 'Movie deleted'
                })
            })
    },
};

module.exports = apiController;