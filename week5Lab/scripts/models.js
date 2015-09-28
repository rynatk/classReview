const API_ROOT = 'https://iron-news.herokuapp.com/articles/';

var Article = Backbone.Model.extend({
  url: function() {
    return API_ROOT + this.get('id');
  }
});

var Articles = Backbone.Collection.extend({
  model: Article,
  url: API_ROOT
});
