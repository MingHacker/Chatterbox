var MessagesView = {

  $chats: $('#chats'),
  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleUsernameClick);
  },

  handleUsernameClick: function () {
    var username = $(this).text();
    if (!Friends.friendsList.includes(username) && username !== App.username) {
      Friends.friendsList.push(username);
      MessagesView.render();
    }
  },

  // add all the messages in messagelist
  render: function() {
    var html = '';
    if (!Messages.messageList) {
      return;
    }
    for (var i = 0; i < Messages.messageList.length; i++) {
      // filter:
      // message has a username
      // message has text
      // message doesn't contain a script tag
      // message exists in the current room
      if (Messages.messageList[i].username && Messages.messageList[i].text && Messages.messageList[i].text.indexOf('<script') === -1 && Messages.messageList[i].roomname === $('#rooms select').val()) {
        // if the username is in the friends list, render the message with friend styles
        if (Friends.friendsList.includes(Messages.messageList[i].username)) {
          html += MessageView.renderFriend(Messages.messageList[i]);
        // otherwise render it as normal
        } else {
          html += MessageView.render(Messages.messageList[i]);
        }
      }
    }
    MessagesView.$chats.empty();
    MessagesView.$chats.append(html);
  },
  // add specified message
  renderMessage: function(message) {
    var html = MessageView.render(message);
    MessagesView.$chats.append(html);
  },

  addFriend: function(event) {
    var name = $(this).html();
    var friends = Friends.list;
    if (!friends.includes(name) && name !== App.username) {
      friends.push(name);
      MessagesView.render();
    }
  }

};

