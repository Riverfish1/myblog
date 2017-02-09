module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts');
  });
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));
  app.use('/tags', require('./tags'));
  app.use('/zj', require('./zj'));
  app.use('/aboutus', require('./aboutus'));
  app.use('/liuyan', require('./liuyan'));
  app.use('/search', require('./search'));

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.render('404');
    }
  });
};
