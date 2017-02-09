var express = require('express');
var router = express.Router();
var PostModel = require('../models/posts');
var posts = require('../middlewares/mockData').mockData;

router.get('/', function (req, res, next) {
    var keyword = req.query.q;
    PostModel.getSearch(keyword)
      .then(function (response) {
          var posts = response;
          var result = {
              all: posts
          }
          res.render('search', {
              posts: result
          });
      })
      .catch(next);
});

module.exports = router;
