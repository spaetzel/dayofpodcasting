define(['jquery', 'order!underscore', 'backbone',  'text!templates/main/submit.html'], function($, _, Backbone, contributeTemplate) {

  var contributeView = Backbone.View.extend({

    el: $('#bodyArea'),

    initialize: function() {
      this.template = _.template(contributeTemplate);
    },
    render: function() {
console.log('render submit');

      $(this.el).html(this.template());

      $('.nav li').removeClass('active');
      $('#submit').addClass('active');

    }

  });



  return contributeView;
});
