// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'ID');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'key');
});

// Put your campus prefix here
window.CAMPUS = 'rpt';
