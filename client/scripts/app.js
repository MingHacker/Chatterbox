var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function () {

      Rooms.addRooms();
      RoomsView.render();
      $('#rooms select').val('Lobby'); // start in the lobby
      MessagesView.render();
      App.stopSpinner();

    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      Messages.messageList = data.results;
      // moved these funciton calls into specific invocations of the fetch method...
      // Rooms.addRooms();
      // RoomsView.render();
      // MessagesView.render();
      callback();

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
