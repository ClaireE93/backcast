var AppView = Backbone.View.extend({

  el: '#app',

  events: {
    'click #autoplay-button': 'toggleAutoplay'
  },

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.videos.search('puppies');
    window.isAutoplay = true;

    const videoList = new VideoListView({el: $('#list'), collection: this.videos});
    const videoPlayer = new VideoPlayerView({el: $('#player'), collection: this.videos});
    const search = new SearchView({el: $('#search'), collection: this.videos});
    search.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  toggleAutoplay: function() {
    const isPlaying = $('#autoplay-button').text() === 'Stop'; // If currently autoplay, button will read STOP
    window.isAutoplay = !isPlaying;
    if (isPlaying) {
      $('#autoplay-button').text('Autoplay');
    } else {
      $('#autoplay-button').text('Stop');
    }
  },

  template: templateURL('src/templates/app.html')

});
