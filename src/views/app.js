var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    console.log('hey');
    this.$el.html(this.template());


    new SearchView({
      el: $('.search'),
      collection: this.videos,
    }).render();
  
    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0)
    }).render();    

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos,
    }).render();

    //this.$el.find('.list').append(entryView);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
