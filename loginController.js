const cardModel = require('../models/card');

async function login(req,res,next){
    const {Username,Password} = req.body;
    const userInfo = await cardModel.findOne({ Username,Password });
    try {
        if(!userInfo|| userInfo.password != Password) return res.status(404).json({message: error})

    return res.status(200).json({userInfo})
    } catch (e) {
        return res.status(403).json({message: e})
    }
}

module.exports = {
    login
}