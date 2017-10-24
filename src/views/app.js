var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videoListView = new VideoListView(this.videos);
    this.render();
  },


  render: function() {
    console.log('hey');
    this.$el.html(this.template());
    this.$el.append(this.videoListView.render().el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
