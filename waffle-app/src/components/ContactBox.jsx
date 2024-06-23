import { useState } from "react";

// contains contact info ??? also idk if we need the date
function ContactBox({ type, name, specialty, expertise, story }) {
  let description = "Specialty: ";
  let category = "Expertise: ";
  if (type == "volunteer") {
    description = "Overcame: ";
    category = "Support area: ";
  }
  return (
    <div className="info-box">
      <p></p>
      <p className="information">
        Name: <span className="blurb">{name}</span>
        <br></br>
        {description}
        <span className="blurb">{specialty}</span>
        <br></br>
        {category}
        <span className="blurb">{expertise}</span>
        <br></br>
        Story: <span className="blurb">{story}</span>
      </p>
    </div>
  );
}

export default ContactBox;
