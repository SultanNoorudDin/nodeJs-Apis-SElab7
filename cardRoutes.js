const express =require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');
const cardController2 = require('../controllers/loginController');

// post card

router.post("/cards",cardController.createCard);
router.get("/getCard",cardController.getAllCards);
router.post("/login",cardController2.login);


module.exports = router;
