const Card = require("../models/card");

//make card

async function createCard(req, res) {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getAllCards(req, res) {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createCard,
  getAllCards,
};
