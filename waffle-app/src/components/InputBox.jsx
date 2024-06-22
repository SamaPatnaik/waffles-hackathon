import { useState } from "react";
import React from "react";

function InputBox({ callback }) {
  const defaultMessage = "Chat about your wellness...";
  var [input, setInput] = useState(defaultMessage);

  return (
    <div className="input-box">
      <input
        className="chat-input"
        value={input}
        onFocus={(event) => {
          if (input == defaultMessage) {
            setInput("");
          }
        }}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            setInput("");
            callback(event.target.value);
          }
        }}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
    </div>
  );
}

export default InputBox;
