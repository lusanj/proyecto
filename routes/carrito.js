var express = require('express');
var router = express.Router();
var authMiddleware = require('../middlewares/authMiddleware')


router.get('/', authMiddleware, function(req, res) {

    res.render('carrito')
  });


module.exports = router;