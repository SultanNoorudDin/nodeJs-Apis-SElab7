const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    // "card-type":"credit",
    // "card-bank":"HBL",
    // "card-holder":"Sultan",
    // "card-number":"5555097726362311",
    // "card-expiry":"2030-03-12",
    // "card-cvc":"66969"
    "username": String,
    "password": String

},{timestamps:true})

module.exports = mongoose.model("Card",cardSchema);

    