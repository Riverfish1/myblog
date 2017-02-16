var express = require('express');
var router = express.Router();
var PostModel = require('../models/posts');
// var posts = require('../middlewares/mockData').mockData;
var Utils = require('../middlewares/utils');
// var resultParse = require('../middlewares/resultParse');

router.get('/', function (req, res, next) {
    var keyword = req.query.q;


    PostModel.getSearch(keyword)
      .then(function (response) {
          res.render('search', {
              posts: response
          });
      })
      .catch(next);
});

module.exports = router;
