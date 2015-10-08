import $ from 'jquery';
import Backbone from 'backbone';
import LineView from './lineView.js';

var PageView = Backbone.View.extend({
  tagName: 'ol',

  render: function() {
    var self = this;
    this.collection.each(function(article) {
      var view = new LineView({model: article});
      self.$el.append(view.render());
    })
    return this.$el;
  }
});

export default PageView;
