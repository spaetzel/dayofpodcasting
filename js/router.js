var router;


// Filename: router.js
define(['jquery', 'underscore', 'backbone', 'views/home/home','views/home/submit', 'views/home/links'], function($, _, Backbone, mainHomeView, submitView,linksView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      'home': 'defaultAction',
      'submit': 'showSubmit',
      'links': 'showLinks',
      // Default
      '*actions': 'defaultAction'
    },

    defaultAction: function(actions) {

      // We have no matching route, lets display the home page
      var homeView = new mainHomeView();
      homeView.render();

    },
    showSubmit: function(){
      console.log('submit');
      var contribute = new submitView();
      contribute.render();
    },
    showLinks: function(){
      var links = new linksView();
      links.render();
    }
  });

  var initialize = function() {
      router = new AppRouter;
      Backbone.history.start();
      };
  return {
    initialize: initialize
  };

});
