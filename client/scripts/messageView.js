var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `),

  renderFriend: _.template(`
  <div class="chat friend">
    <div class="username"><%- username %></div>
    <div><%- text %></div>
  </div>
`),
};