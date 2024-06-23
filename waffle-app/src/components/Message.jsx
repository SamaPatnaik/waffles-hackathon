import { useState } from "react";

// contains wellness information from the chatbot
// the summary is the shortened version
// switches between summary and info upon clicking
// idk if the date is necessary
function Message({ isUser, isBot, message }) {

  if (isUser) {
    return (
      <div className="message-box">
        <div className="message user-message">
          <p className="user-text">{message}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="message-box">
        <div className="message other-message">
          <p className="other-text">{message}</p>
        </div>
      </div>
    );
  }
}

export default Message;
