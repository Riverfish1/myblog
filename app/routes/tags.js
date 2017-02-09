var express = require('express');
var router = express.Router();

var PostModel = require('../models/posts');
// var CommentModel = require('../models/comments');
// var checkLogin = require('../middlewares/check').checkLogin;
// var Utils = require('../middlewares/utils');
// var mockData = require('../middlewares/mockData').mockData;

var resultParse = require('../middlewares/resultParse');

// 获取index/xwzj/qwzj等分类下数据
router.get('/:tag', function (req, res, next) {
    var author = req.query.author;
    var tag = req.params.tag;
    PostModel.getPosts(author)
      .then(function (response) {
          var result = resultParse({
              data: response,
              category: tag,
              key: 'tag'
          })
          res.render('tag', {
              posts: result
          });
      })
      .catch(next);
});

module.exports = router;
