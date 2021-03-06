import React, { Component } from "react";
import Message from "../components/message";
import MessageForm from "../containers/message_form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMessages } from "../actions/index";

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresh = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  };

  render() {
    const style = {
      flexGrow: "1",
      padding: "20px",
      overflow: "scroll",
    };

    return (
      <div
        className="channel-chat"
        ref={(list) => {
          this.list = list;
        }}
      >
        <div className="channel-title">
          <h4 style={{ margin: "0px" }}>
            Channel{" "}
            <span style={{ fontWeight: "bold" }}>
              #{this.props.selectedChannel}
            </span>
          </h4>
        </div>
        <div className="channel-messages" style={style}>
          {this.props.messages.map((message) => {
            return <Message message={message} key={message.id} />;
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
