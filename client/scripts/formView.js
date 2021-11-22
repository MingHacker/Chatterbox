var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = Messages.addMessage(App.username, $('#rooms select').val(), $('#message').val());
    $('#message').val(''); // clear the input field
    Parse.create(message);
    App.startSpinner();
    App.fetch(function () {

      Rooms.addRooms();
      var currentRoom = $('#rooms select').val(); // store the current room
      RoomsView.render();
      $('#rooms select').val(currentRoom); // switch back to current room after roomView render
      MessagesView.render();
      App.stopSpinner();

    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};