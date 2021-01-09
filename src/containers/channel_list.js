import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectChannel } from "../actions/index";

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
  };

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={
          channel === this.props.selectedChannel ? "channel active" : "channel"
        }
        onClick={() => this.handleClick(channel)}
      >
        #{channel}
      </li>
    );
  };
  render() {
    const style = {
      width: "15vw",
      background: "#F4F4F4",
      padding: "20px",
    };
    return (
      <div className="channel-list" style={style}>
        <p style={{ margin: "0px", color: "black", fontWeight: "bold" }}>
          Redux Chat
        </p>
        <ul className="channels">
          {this.props.channels.map((channel) => this.renderChannel(channel))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
