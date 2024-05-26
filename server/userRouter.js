const express = require("express");
const router = express.Router();
const userController = require('./userController')

router.post('/', userController.login, (req, res, next) => {
    console.log('---> ENTERING login ROUTER <---');
    return res.status(201).json(res.locals.login)
})



module.exports = router;