define([
    'jquery',
    'underscore',
    'backbone',
    'videojs'
], function($, _, Backbone, videojs) {

    var VideoPlayer = Backbone.View.extend({
        playerId: 'nerdPlayer',
        flashPlayer: 'app/js/vendor/video-js/video-js.swf',

        initialize: function() {
            var hsnPlayer;

            videojs.options.flash.swf = this.flashPlayer;

            videojs(this.playerId).ready(function () {
                hsnPlayer = this;
                //hsnPlayer.play();
            });

            return this;
        }
    });

    return VideoPlayer;
});