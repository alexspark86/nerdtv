define([
    'jquery',
    'underscore',
    'backbone',
    'Views/VideoPlayerView'
], function($, _, Backbone, VideoPlayerView) {

    var App = function() {

        this.videoPlayer = new VideoPlayerView();


        $(document).ready(function() {
            Backbone.trigger('domReady');
        });
    };

    return new App;
});