var VideoListView = Backbone.View.extend({

  initialize: function() {
    
  },

  render: function() {
    console.log('hey');
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this);
    
    return this;
    
  },

  template: templateURL('src/templates/videoList.html')

});
