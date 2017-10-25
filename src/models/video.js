var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

  

});
// var videoListArray = [];
// for (var i = 0; i < window.exampleVideoData.length; i ++) {
//   videoListArray.push(new Video(window.exampleVideoData[i]));
// }

