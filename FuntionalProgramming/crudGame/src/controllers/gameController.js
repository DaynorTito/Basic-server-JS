const { Game } = require('../models');

// POST /game
exports.createGame = async (req, res, next) => {
  try {
    const { name, description, genre, platform } = req.body;
    const newGame = await Game.create({ name, description, genre, platform });
    res.status(201).json(newGame);
  } catch (error) {
    next(error);
  }
};

// GET /game/:id
exports.getGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await Game.findByPk(id);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

// PUT /game/:id
exports.updateGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, genre, platform } = req.body;
    const game = await Game.findByPk(id);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    game.name = name;
    game.description = description;
    game.genre = genre;
    game.platform = platform;
    await game.save();
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

// DELETE /game/:id
exports.deleteGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await Game.findByPk(id);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    await game.destroy();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// PATCH /game/:id
exports.partialUpdateGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const game = await Game.findByPk(id);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    Object.keys(updates).forEach(key => {
      game[key] = updates[key];
    });
    await game.save();
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};
