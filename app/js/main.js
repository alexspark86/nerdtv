require.config({
    baseUrl: 'app/js',

    paths: {
        'jquery':       'vendor/jquery/jquery-1.11.2.min',
        'underscore':   'vendor/lodash/lodash.custom.min',
        'backbone':     'vendor/backbone/backbone-min',
        'videojs':      'vendor/video-js/video'
    },

    waitSeconds: 20
});

require(['app']);