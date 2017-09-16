var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//renders the index.hbs for the main site
  res.render('shop/index', { title: 'Book Cart' });
});

module.exports = router;
