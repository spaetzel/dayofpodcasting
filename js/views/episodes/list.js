define(['jquery', 'underscore', 'backbone', 'text!templates/episodes/list.html'

], function($, _, Backbone, listTemplate) {

  var eventListView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(listTemplate);
    },
    render: function() {
      

      return this;
    }

  });

  return eventListView;

});
