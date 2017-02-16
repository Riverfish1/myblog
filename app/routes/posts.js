var express = require('express');
var router = express.Router();

var PostModel = require('../models/posts');
var CommentModel = require('../models/comments');
var checkLogin = require('../middlewares/check').checkLogin;
var Utils = require('../middlewares/utils');
var mockData = require('../middlewares/mockData').mockData;
var resultParse = require('../middlewares/resultParse');

router.get('/', function (req, res, next) {
    var author = req.query.author;
    PostModel.getPosts(author)
      .then(function (response) {
          var result = resultParse({
              data: response
          })
          res.render('index', {
              activeNav: 'index',
              posts: result
          });
          // res.render({
          //     success: 0,
          //     posts: posts
          // })
      })
      .catch(next);
});

// GET /posts/create 发表文章页
router.get('/create', checkLogin, function (req, res, next) {
    res.render('create');
});

// POST /posts 发表一篇文章
router.post('/', checkLogin, function (req, res, next) {
    // var author = req.session.user._id;
    var author = req.session.user.name;
    var title = req.fields.title;
    var content = req.fields.content;
    //正则匹配markdown语法，去除markdown标签，如##
    var reg = /[\\\`\*\_\[\]\#\+\-\!\>]/g;
    var postSummary = content.replace(reg, "").slice(0, 100) + '...';
    var category = req.fields.category;
    var sub_category = req.fields.sub_category;
    var img_url = req.fields.img_url || '';
    var tag = req.fields.tag;
    var recommend = req.fields.recommend || false;

    // 校验参数
    try {
        if (!title.length) {
            throw new Error('请填写标题');
        }
        if (!content.length) {
            throw new Error('请填写内容');
        }
    } catch (e) {
        req.flash('error', e.message);
        return res.redirect('back');
    }

    var post = {
        author: author,
        title: title,
        content: content,
        category: category,
        postSummary: postSummary,
        sub_category: sub_category,
        img_url: img_url,
        tag: tag,
        recommend: recommend,
        pv: 0
    };

    PostModel.create(post)
      .then(function (result) {
          // 此 post 是插入 mongodb 后的值，包含 _id
          post = result.ops[0];
          var redirectUrl = '/posts/' + post.category + '/' + post._id;
          req.flash('success', '发表成功');
          // 发表成功后跳转到该文章页
          // res.redirect('/posts/${post.category}/${post._id}');
          res.redirect(redirectUrl);
      })
      .catch(next);
});

// 获取index/xwzj/qwzj等分类下数据
router.get('/:category', function (req, res, next) {
    var author = req.query.author;
    var category = req.params.category;
    if (category == 'xwzj' || 'qwzt' || 'works') {
        PostModel.getPosts(author)
          .then(function (response) {
              var result = resultParse({
                  data: response,
                  category: category
              })
              res.render(category, {
                  activeNav: category,
                  posts: result
              });
          })
          .catch(next);
    } else {
        next();
    }

});

// GET /posts/:postId 单独一篇的文章页
router.get('/:category/:postId', function (req, res, next) {
    var author = req.query.author;
    var postId = req.params.postId;
    var category = req.params.category;

    Promise.all([
          PostModel.getPosts(author), //获取所有文章
          PostModel.getPostById(postId),// 获取文章信息
          PostModel.incPv(postId)// pv 加 1
      ])
      .then(function (result) {
          // all:特定目录下的所有文章
          if(!result[1]){
              throw new Error('该文章不存在');
          }
          var results = resultParse({
              data: result[0],
              post: result[1],
              postId: postId,
              category: category,
              sub_category: result[1].sub_category
          })
          res.render('post', {
              activeNav: category,
              posts: results
          });
      })
      .catch(next);

    // Promise.all([
    //         PostModel.getPostById(postId),// 获取文章信息
    //         // CommentModel.getComments(postId),// 获取该文章所有留言
    //         PostModel.incPv(postId)// pv 加 1
    //     ])
    //     .then(function (result) {
    //         // var post = result[0];
    //         // var comments = result[1];
    //         // if (!post) {
    //         //     throw new Error('该文章不存在');
    //         // }
    //
    //
    //
    //
    //         res.render('post', {
    //             posts: posts,
    //             comments: comments
    //         });
    //     })
    //     .catch(next);
});

// 获取index/xwzj/qwzj等分类下子类数据
router.get('/:category/subcategory/:sub_category', function (req, res, next) {
    var author = req.query.author;
    var category = req.params.category;
    var sub_category = req.params.sub_category;
    if (category == 'xwzj' || 'qwzt' || 'works') {
        PostModel.getPosts(author)
          .then(function (response) {
              var result = resultParse({
                  data: response,
                  category: category,
                  sub_category: sub_category
              })
              res.render(category, {
                  activeNav: category,
                  posts: result
              });
          })
          .catch(next);
    } else {
        next();
    }

});


// 获取index/xwzj/qwzj等分类下分页数据
router.get('/:category/page/:page', function (req, res, next) {
    var author = req.query.author;
    var category = req.params.category;
    var currentPage = req.params.page ? parseInt(req.params.page) : 1;
    if (category == 'xwzj' || 'qwzt' || 'works') {
        PostModel.getPosts(author)
          .then(function (response) {
              //获取当前目录下文章数据集合；
              var result = resultParse({
                  data: response,
                  currentPage: currentPage,
                  category: category
              })
              res.render(category, {
                  activeNav: category,
                  posts: result
              });
          })
          .catch(next);
    } else {
        next();
    }

});

// GET /posts/:postId/edit 更新文章页
router.get('/:category/edit/:postId', checkLogin, function (req, res, next) {
    var postId = req.params.postId;
    var author = req.session.user._id;

    PostModel.getRawPostById(postId)
      .then(function (post) {
          if (!post) {
              throw new Error('该文章不存在');
          }
          // if (author.toString() !== post.author._id.toString()) {
          //     throw new Error('权限不足');
          // }
          res.render('edit', {
              post: post
          });
      })
      .catch(next);
});

// POST /posts/:postId/edit 更新一篇文章
router.post('/:category/edit/:postId', checkLogin, function (req, res, next) {
    var postId = req.params.postId;
    var author = req.session.user.name;
    var title = req.fields.title;
    var category = req.fields.category;
    var sub_category = req.fields.sub_category;
    var tag = req.fields.tag;
    var content = req.fields.content;
    var reg = /[\\\`\*\_\[\]\#\+\-\!\>]/g;
    var postSummary = content.replace(reg, "").slice(0, 100) + '...';
    // var category = req.params.category;

    PostModel.updatePostById(postId, author, {
        title: title,
        content: content,
        postSummary: postSummary,
        category: category,
        sub_category: sub_category,
        tag: tag
    })
      .then(function () {
          req.flash('success', '编辑文章成功');
          // 编辑成功后跳转到上一页
          var redirectUrl = '/posts/' + category + '/' + postId;
          res.redirect(redirectUrl);
      })
      .catch(next);
});

// GET /posts/:postId/remove 删除一篇文章
router.get('/:category/remove/:postId', checkLogin, function (req, res, next) {
    var postId = req.params.postId;
    var author = req.session.user.name;
    // 首页删除,返回到首页
    var category = req.params.category == 'index' ? '' : req.params.category;

    PostModel.delPostById(postId, author)
      .then(function () {
          req.flash('success', '删除文章成功');
          // 删除成功后跳转到主页
          var redirectUrl = '/posts/' + category ;
          res.redirect(redirectUrl);
      })
      .catch(next);
});

// POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', checkLogin, function (req, res, next) {
    var author = req.session.user._id;
    var postId = req.params.postId;
    var content = req.fields.content;
    var comment = {
        author: author,
        postId: postId,
        content: content
    };

    CommentModel.create(comment)
      .then(function () {
          req.flash('success', '留言成功');
          // 留言成功后跳转到上一页
          res.redirect('back');
      })
      .catch(next);
});

// GET /posts/:postId/comment/:commentId/remove 删除一条留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function (req, res, next) {
    var commentId = req.params.commentId;
    var author = req.session.user._id;

    CommentModel.delCommentById(commentId, author)
      .then(function () {
          req.flash('success', '删除留言成功');
          // 删除成功后跳转到上一页
          res.redirect('back');
      })
      .catch(next);
});

module.exports = router;
