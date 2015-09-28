var Router = Backbone.Router.extend({
  routes: {
    ':asdjhg/comments': 'showComments',
    '': 'showPage'
  },

  showPage: function () {
    var self = this;
    this.articles.fetch().then(function() {
      $('.jumbotron').html(self.pageView.render());
    });
  },

  showComments: function (articleId) {  //passes asdjhg as articleId
    var article = new Article({id: articleId});
    article.fetch().then(function () {
      var view = new CommentsView({model: article});
      $('.jumbotron').html(view.render());
    })
  },

  initialize: function () {
    this.articles = new Articles();
    this.pageView = new PageView({collection: this.articles});
    Backbone.history.start();
  }

});
