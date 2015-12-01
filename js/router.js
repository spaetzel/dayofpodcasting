var router;


// Filename: router.js
define(['jquery', 'underscore', 'backbone', 'views/home/home','views/home/submit', 'views/home/links',
  'views/episodes/list'], function($, _, Backbone, mainHomeView, submitView,linksView, listView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      'home': 'defaultAction',
      'submit': 'showSubmit',
      'links': 'showLinks',
      '2014': 'show2014',
      '2013': 'show2013',
      '2012': 'show2012',
      '2011': 'show2011',
      '2010': 'show2010',
      // Default
      '*actions': 'defaultAction'
    },

    defaultAction: function(actions) {

      // We have no matching route, lets display the home page
      var homeView = new mainHomeView();
      homeView.render();

    },
    showSubmit: function(){

      var contribute = new submitView();
      contribute.render();
    },
    showLinks: function(){
      var links = new linksView();
      links.render();
    },
    show2014: function(){
      this.showYear('dayofpodcasting2014');

            $('.nav li').removeClass('active');
      $('#2014').addClass('active');
    },
    show2013: function(){
      this.showYear('dayofpodcasting2013');

            $('.nav li').removeClass('active');
      $('#2013').addClass('active');
    },
    show2012: function(){
      this.showYear('dayofpodcasting2012');

      $('.nav li').removeClass('active');
      $('#2012').addClass('active');
    },
    show2011: function(){
      this.showYear('dayofpodcasting2011');

            $('.nav li').removeClass('active');
      $('#2011').addClass('active');
    },
    show2010: function(){
      this.showYear('dayofpodcasting2010');

            $('.nav li').removeClass('active');
      $('#2010').addClass('active');
    },
    showYear: function(year){
      var view = new listView({
        el: $('#bodyArea'),
        model: year
      });
      view.render();
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
