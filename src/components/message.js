import React, { Component } from "react";

class Message extends Component {
  render() {
    // user-data-flex style
    const style = {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    };

    return (
      <div className="message">
        <div className="user-date-flex" style={style}>
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "14px",
              marginBottom: "0px",
              color: "black",
            }}
          >
            {this.props.message.author}
          </p>
          <small
            style={{
              marginLeft: "10px",
              fontSize: "10px",
              fontStyle: "italic",
              color: "gray",
            }}
          >
            {this.props.message.created_at}
          </small>
        </div>
        <p style={{ color: "black" }}>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
