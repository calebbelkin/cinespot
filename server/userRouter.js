const express = require("express");
const router = express.Router();
const userController = require('./userController')

router.post('/login', userController.login, (req, res, next) => {
    console.log('---> ENTERING login ROUTER <---');
    return res.status(201).json(res.locals.login)
})

router.patch('/addfavorite', userController.addFavorite, (req, res, next) => {
    console.log('---> ENTERING add fav ROUTER <---');
    return res.status(201).json(res.locals.addFavorite)
})



module.exports = router;