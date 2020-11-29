const Character = require('../models/characters');

exports.index = async (req, res, next) => {
  try {
    const characters = await Character.find();
    res.status(200).json(characters);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const character = await Character.findById(req.params.id);
    res.status(200).json(character);
  } catch (error) {
    next(error);
  }
};

exports.search = async (req, res, next) => {
  try {
    const characters = await Character.search(req.params.name);
    res.status(200).json(characters);
  } catch (error) {
    next(error);
  }
};