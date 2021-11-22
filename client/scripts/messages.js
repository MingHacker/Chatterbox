var Messages = {

  addMessage: function(username, roomname, text) {
    var message = {
      username: username,
      text: text,
      roomname: roomname
    };
    return message;
  }

};