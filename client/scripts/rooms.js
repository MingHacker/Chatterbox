var Rooms = {
  addRooms: function () {
    Rooms.names = ['Lobby'];
    for (message of Messages.messageList) {
      // filter out message if it doesn't have a username and text
      if (message.username && message.text) {
        // if it doesn't have a roomname
        if (!message.roomname) {
          // put it in the lobby
          message.roomname = 'Lobby';
        }
        // if the roomname doesn't exist in the names array
        if (!Rooms.names.includes(message.roomname)) {
          // push it to the names array
          Rooms.names.push(message.roomname);
        }
      }
    }
  }

};

