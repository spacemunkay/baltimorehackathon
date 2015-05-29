//= require underscore
//= require jquery.scrollTo
//= require jquery.eventbrite

$(function() {
  $('#second-hackathon').eventbrite_attendees({
    app_key: 'BFVR3ADZQZVNSY7GT7',
    event_id: '3531576039'
  });
});

$.getDocHeight = function(){
  var D = document;
  return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
                  Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
                  Math.max(D.body.clientHeight, D.documentElement.clientHeight));
};
