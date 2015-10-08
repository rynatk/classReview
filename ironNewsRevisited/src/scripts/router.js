import $ from 'jquery';
import Backbone from 'backbone';
import Article from './models/article.js';
import Articles from './collections/articles.js';
import CommentsView from './views/commentsView.js';
import PageView from './views/pageView.js';

var Router = Backbone.Router.extend({
  routes: {
    '' : 'showPage',
    ':asdf/comments' : 'showComments'
  },

  showPage: function() {
    var self = this;
    this.articles.fetch().then(function() {
      $('main').html(self.pageView.render());
    });
  },

  showComments: function(articleId) {
    var article = new Article({id: articleId});
    article.fetch().then(function() {
      var view = new CommentsView({model: article});
      $('main').html(view.render());
    })
  },

  initialize: function() {
    this.articles = new Articles();
    this.pageView = new PageView({collection: this.articles});
    Backbone.history.start();
  }
});

export default Router;
