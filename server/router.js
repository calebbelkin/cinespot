const express = require("express");
const router = express.Router();
const controller = require('./controller')

router.get('/', controller.getData, (req, res) => {
console.log('---> ENTERING GET DATA ROUTER <---');
return res.status(200).json(res.locals.getData);
})



module.exports = router;