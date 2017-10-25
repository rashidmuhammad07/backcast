var VideoListView = Backbone.View.extend({

  initialize: function() {
    
    //this.collection.on('change', this.render, this);
  },
  render: function() {
    //console.log('hey');
    this.$el.children().detach();
    this.$el.html(this.template());
    //console.log('collection of video list view: ', this.collection);
    //console.log('collection of video list view: ', videoListArray);

    // new VideoListEntryView({
    //   collection: this.collection,
    // }).render();
    this.collection.each(this.renderVideo, this);


    return this;
    
  },
  
  renderVideo: function (video) {
    this.$('.video-list').append(new VideoListEntryView({
      model: video
      
    }).render().el
    );
  },

  template: templateURL('src/templates/videoList.html')

});
