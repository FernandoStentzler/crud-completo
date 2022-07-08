const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// endpoint: GET http://localhost:3000/api/movies
router.get('/movies', apiController.listMovies);

// endpoint: GET http://localhost:3000/api/movies/:id
router.get('/movies/:id', apiController.getMovie);

// endpoint: POST http://localhost:3000/api/movies
router.post('/movies', apiController.createMovie);

// endpoint: DELETE http://localhost:3000/api/movies/:id
router.delete('/movies/:id', apiController.deleteMovie);

module.exports = router;