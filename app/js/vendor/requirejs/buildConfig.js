require.config({
    baseUrl: 'js',
    paths: {
        'jquery':       'vendor/jquery/jquery-1.11.2.min',
        'underscore':   'vendor/lodash/lodash.custom.min',
        'backbone':     'vendor/backbone/backbone-min',
        'jquery.imagelightbox': 'vendor/imagelightbox/imagelightbox.min'
    },
    shim: {
        'jquery.imagelightbox' : {
            deps: [ 'jquery' ],
            exports: 'jQuery.fn.imageLightbox'
        }
    }
});