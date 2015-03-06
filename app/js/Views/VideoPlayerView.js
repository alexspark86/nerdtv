define([
    'jquery',
    'underscore',
    'backbone',
    'videojs',
    'text!templates/videoPlayer.html'
], function($, _, Backbone, videojs, videoPlayerTemplate) {

    var VideoPlayer = Backbone.View.extend({
        el: '#video-player',
        template: _.template(videoPlayerTemplate),

        playerId: 'nerdPlayer',
        flashPlayer: 'app/js/vendor/video-js/video-js.swf',

        initialize: function() {
            this.render();

            return this;
        },

        render: function() {
            this.$el.html(this.template({
                width: 'auto',
                height: 'auto'
            }));

            this.startPlayer();
        },

        startPlayer: function() {
            var hsnPlayer;
            videojs.options.flash.swf = this.flashPlayer;

            videojs(this.playerId).ready(function () {
                hsnPlayer = this;
                hsnPlayer.play();
            });
        }
    });

    return VideoPlayer;
});