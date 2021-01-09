import React, { Component } from "react";
import Message from "../components/message";
import MessageForm from "../containers/message_form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMessages } from "../actions/index";

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  componentDidMount() {
    this.refresh = setInterval(this.props.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

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
          <h4>Channel #{this.props.selectedChannel}</h4>
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
