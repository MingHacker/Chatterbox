var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.renderRoom('Lobby'); --> removed: unnecessary, caused spec to fail
    RoomsView.$select.on('change', RoomsView.handleRoomChange);
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
  },

  handleAddRoom: function() {
    var newRoom = prompt('Enter a new room name');
    if (newRoom === null || newRoom === '') {
      return;
    }
    if (!Rooms.names) {
      Rooms.names = [];
    }
    if (Rooms.names.includes(newRoom)) {
      alert('Room already exists');
      return;
    }
    RoomsView.renderRoom(newRoom);
    Rooms.names.push(newRoom);
    RoomsView.$select.val(newRoom); // switch to the newly created room
    MessagesView.render();
  },

  handleRoomChange: function() {
    // updated to re-fetch when switching rooms
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

  render: function() {
    var curr = RoomsView.$select.val();
    RoomsView.$select.empty();
    for (room of Rooms.names) {
      RoomsView.renderRoom(room);
    }

    if (Rooms.names.includes(curr)) {
      RoomsView.$select.val(curr);
    } else {
      RoomsView.$select.val('Lobby');
    }
  },

  renderRoom: function(roomname) {
    var html = `<option value='${roomname}'>${roomname}</option>`;
    RoomsView.$select.append(html);
  },

  handleChange: function(event) {
    MessagesView.render();
  },

  handleAddRoom: function(event) {
      var roomname = prompt('Please enter your roomname','newRoom');
      if (roomname != null) {
         if (Rooms.names.includes(roomname)) {
           alert('Room already exists!');
         } else {
           Rooms.names.push(roomname);
           RoomsView.renderRoom(roomname);
         }
      }
  }

};
