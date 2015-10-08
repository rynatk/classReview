import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var CommentsView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($('#commentsTemplate').text()),

  render: function() {
    var self = this;
    _.each(this.model.get('comments'), function(comment) {
      self.$el.append(self.template(comment));
    });
    return this.$el;
  }
});

export default CommentsView;
