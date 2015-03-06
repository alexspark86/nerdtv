define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    var PhotosView = Backbone.View.extend({
        el: '#photos',

        initialize: function() {
            this.render();

            return this;
        },

        render: function() {

        }
    });

    return PhotosView;
});