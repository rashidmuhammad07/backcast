var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   console.log(this.collection);
  //   this.render();

  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
