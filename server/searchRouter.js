const express = require("express");
const router = express.Router();
const searchController = require('./searchController')

router.get('/ :title', searchController.searchMovie, (req, res, next) => {
    console.log('---> ENTERING search movie ROUTER <---');
    return res.status(201).json(res.locals.searchMovie)
})



module.exports = router;