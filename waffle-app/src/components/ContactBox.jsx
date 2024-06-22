import { useState } from "react";

// contains contact info ??? also idk if we need the date
function ContactBox({ info, date }) {
  return (
    <div className="contact-box">
      <p className="date">{date}</p>
      <p className="information">{info}</p>
    </div>
  );
}

export default ContactBox;
