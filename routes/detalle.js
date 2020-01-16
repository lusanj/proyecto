var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('detalle-producto')
  });


module.exports = router;