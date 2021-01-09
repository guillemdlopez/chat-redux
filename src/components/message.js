import React, { Component } from "react";
import { emojify } from "react-emojione";

function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

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
              color: strToRGB(this.props.message.author),
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
        <p style={{ color: "black" }}>{emojify(this.props.message.content)}</p>
      </div>
    );
  }
}

export default Message;
