 const router = require('express').Router();
 const getCharById = require('../controllers/getCharById.js');
 const login = require('../controllers/login.js');
 const {postFav, deleteFav} = require('../controllers/handleFavorites.js');


router.get('/character/:id', getCharById)
router.get('/login', login)
router.get('/fav', postFav)
router.get('/fav/:id', deleteFav)

 module.exports = router;
