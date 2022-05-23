import React from "react";

import "./chatItem.css"

export function ChatItem(props) {
//   const rootStyle = {
//     width: 300,
//     height: 50,
//     marginTop: 10,
//     marginBottom: 10,
//   };

//   const messageStyle = {
//     width: 200,
//     marginTop: 20,
//     height: 50,
//     float: position,
//     background: color,
//     borderRadius: "10px",
//   };

  return (
    // <div style={rootStyle}>
    //   <div style={messageStyle}>{body}</div>
    // </div>
    <div className="container">
      <div className={props.sender}>
        <p className="message-content">{props.body}</p>
        <div className={props.message}>{props.date}</div>
      </div>
    </div>
  );
}
