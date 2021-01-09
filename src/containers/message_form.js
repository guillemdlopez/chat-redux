import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import Message from "../components/message";

import { createMessage } from "../actions/index";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      this.state.value
    );
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input-field"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
