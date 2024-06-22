import { useState } from "react";

// contains wellness information from the chatbot
// the summary is the shortened version
// switches between summary and info upon clicking
// idk if the date is necessary
function InfoBox({ summary, info, date }) {
  var [isInfo, setIsInfo] = useState(false);
  var [text, setText] = useState(summary);

  return (
    <div
      className="info-box"
      onClick={() => {
        if (isInfo) {
          setIsInfo(false);
          setText(summary);
        } else {
          setIsInfo(true);
          setText(info);
        }
      }}
    >
      <p className="date">{date}</p>
      <p className="information">{text}</p>
    </div>
  );
}

export default InfoBox;
