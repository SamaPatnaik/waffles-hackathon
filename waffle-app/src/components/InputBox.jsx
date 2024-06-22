import { useState } from "react";
import React from "react";

function MainPage() {
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
            alert("weeeeeee (i'll change this later dw)");
            setInput(defaultMessage);
          }
        }}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
    </div>
  );
}

export default MainPage;
