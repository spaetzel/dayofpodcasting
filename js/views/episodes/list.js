define(['jquery', 'underscore', 'backbone', 'text!templates/episodes/list.html'

], function($, _, Backbone, listTemplate) {

  var eventListView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(listTemplate);
    },
    render: function() {
      var self = this;

      var channelFeed = 'http://castroller.com/channels/' + this.model + '/feed';

      var pipeFeed = 'http://pipes.yahoo.com/pipes/pipe.run?_id=ac7312a04d938c8e42ea66e39762fef5&_render=json&feed=' + escape( channelFeed);

      $.get(pipeFeed, function(data){
      	var items = data.value.items;

      	console.log(items.length);

      	 $(self.el).html(self.template({
      	 	model: items
      	 }));
      });

      return this;
    }

  });

  return eventListView;

});
