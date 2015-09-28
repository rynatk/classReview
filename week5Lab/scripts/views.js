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


var CommentsView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($('#commentsTemplate').text()),

  render: function() {
    var self = this;
    _.each(this.model.get('comments'), function (comment) {
      self.$el.append(self.template(comment));
    })
    return this.$el;
  }
});
