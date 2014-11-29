define(['jquery', 'underscore', 'backbone', 'text!templates/episodes/list.html'

], function($, _, Backbone, listTemplate) {

  var eventListView = Backbone.View.extend({
    initialize: function() {
      this.template = _.template(listTemplate);
    },
    render: function() {
      var self = this;

      var channelFeed = 'http://castroller.com/channels/' + this.model + '/feed';

$.ajax({
  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(channelFeed),
  dataType : 'json',
  success  : function (data) {
    if (data.responseData.feed && data.responseData.feed.entries) {
      $.each(data.responseData.feed.entries, function (i, e) {
        console.log("------------------------");
        console.log("title      : " + e.title);
        console.log("author     : " + e.author);
        console.log("description: " + e.description);
        console.log("description: " + e.enclosure);
      });


              var items = data.responseData.feed.entries;

        console.log(items.length);

         $(self.el).html(self.template({
          model: items
         }));

    }
  }
});


      return this;


    }

  });

  return eventListView;

});
