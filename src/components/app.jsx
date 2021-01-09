import React from "react";
import MessageList from "../containers/message_list";
import ChannelList from "../containers/channel_list";

const App = () => {
  const style = {
    display: "flex",
    height: "100vh",
  };

  return (
    <div className="app">
      <div className="chat-wrapper" style={style}>
        <div className="logo-container">
          <img
            src="https://lewagon.github.io/chat-redux/assets/images/logo.svg"
            className="chat-logo"
          />
        </div>
        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
