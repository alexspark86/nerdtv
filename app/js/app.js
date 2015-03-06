define([
    'jquery',
    'underscore',
    'backbone',
    'views/VideoPlayerView',
    'views/scheduleView'
], function($, _, Backbone, VideoPlayerView, scheduleView) {

    var App = function() {

        this.videoPlayer = new VideoPlayerView();
        this.scheduleView = new scheduleView();

        $(document).ready(function() {
            Backbone.trigger('domReady');
        });
    };

    return new App;
});