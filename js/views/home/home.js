define(['jquery', 'order!underscore', 'backbone', 'views/episodes/list', 'text!templates/main/home.html'], 
  function($, _, Backbone, episodesList, mainTemplate) {

  var mainHomeView = Backbone.View.extend({

    el: $('#bodyArea'),

    initialize: function() {
      this.template = _.template(mainTemplate);
    },
    render: function() {

      $(this.el).html(this.template());


      var events = new episodesList({
        el: $('#lower'),
        model: 'dayofpodcasting'
      });
      events.render();

      $('.nav li').removeClass('active');
      $('#home').addClass('active');

    }

  });



  return mainHomeView;
});
