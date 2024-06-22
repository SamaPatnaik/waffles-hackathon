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
        Name: {name}
        <br></br>
        {description}
        {specialty}
        <br></br>
        {category}
        {expertise}
        <br></br>
        Story: {story}
      </p>
    </div>
  );
}

export default ContactBox;
