define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/scheduleItemTemplate.html',
    'text!data/schedule.json'
], function($, _, Backbone, scheduleItemTemplate, scheduleData) {

    var ScheduleView = Backbone.View.extend({
        el: '.schedule',

        template: _.template(scheduleItemTemplate),

        initialize: function() {
            this.render();

            return this;
        },

        render: function() {
            this.$el.html(this.template(JSON.parse(scheduleData)));
        }
    });

    return ScheduleView;
});