const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// POST /game
router.post('/game', gameController.createGame);

// GET /game/:id
router.get('/game/:id', gameController.getGameById);

// PUT /game/:id
router.put('/game/:id', gameController.updateGameById);

// DELETE /game/:id
router.delete('/game/:id', gameController.deleteGameById);

// PATCH /game/:id
router.patch('/game/:id', gameController.partialUpdateGameById);

module.exports = router;
