define([
    'jquery',
    'underscore',
    'backbone',
    'views/VideoPlayerView'
], function($, _, Backbone, VideoPlayerView) {

    var App = function() {

        this.videoPlayer = new VideoPlayerView();

        $(document).ready(function() {
            Backbone.trigger('domReady');
        });
    };

    // возвращаем функцию инициализации, чтобы requireJS смог передать её в main.js и запустить оттуда
    return new App;
});