import { useState } from "react";

function InfoBox({ info, date }) {
  var [code, setCode] = useState(false);

  return (
    <div className="info-box">
      <p className="date">{date}</p>
      <p className="information">{info}</p>
    </div>
  );
}

export default InfoBox;
