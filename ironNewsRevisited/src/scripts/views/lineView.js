import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var LineView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#lineTemplate').text()),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});

export default LineView;
