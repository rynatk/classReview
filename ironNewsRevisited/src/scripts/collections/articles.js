import Backbone from 'backbone';
import Article from '../models/article.js';

const API_ROOT = 'https://iron-news.herokuapp.com/articles/';

var Articles = Backbone.Collection.extend({
  model: Article,
  url: API_ROOT
});

export default Articles;
