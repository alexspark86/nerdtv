var hsnPlayer;
videojs.options.flash.swf = "app/js/vendor/video-js/video-js.swf";

videojs("nerdPlayer").ready(function () {
    hsnPlayer = this;
    hsnPlayer.play();
});