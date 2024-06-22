import { useState } from "react";
import InputBox from "./InputBox.jsx";
import InfoBox from "./InfoBox.jsx";
import ContactBox from "./ContactBox.jsx";

// main page for chatting
function MainPage() {
  var [code, setCode] = useState(false);

  return (
    <div className="main">
      <div className="chat-box">
        <div className="messages">
          Discuss any wellness issues, ask for assistance, or connect to
          professionals.
        </div>
        {code}
        <InputBox></InputBox>
      </div>

      <div className="your-info overflow-auto">
        <div>
          <p className="info-header">Your Info</p>
          <p className="info-description">Click on an info box to expand.</p>
        </div>
        <InfoBox
          className="contact-box"
          info={"hdfey duddfjksfhjsdfkj"}
          summary={"hi he jrhbsjf dhfj fhj "}
        ></InfoBox>
        <ContactBox info="idk pretend this has contact info"></ContactBox>
        <InfoBox
          info="heehoo djfmsfjdj "
          summary={"blah blah hrfhsdh fhds jfds"}
        ></InfoBox>
        <InfoBox
          info="heehoo fhds jkfsdh jfdsfsdjkf hsdfdjfoe"
          summary={"blah blah hrfhsdh fhds jfds"}
        ></InfoBox>
        <InfoBox
          info="heehoo hdis fh fhds fkjdhskf sjf s"
          summary={"blah blah hrfhsdh fhds jfds"}
        ></InfoBox>
        <InfoBox
          info="heehoo"
          summary={"blah blah hrfhsdh fhds jfds"}
        ></InfoBox>
        <InfoBox
          info="heehoo"
          summary={"blah blah hrfhsdh fhds jfds"}
        ></InfoBox>
        <InfoBox
          info="heehoo"
          summary={"blah blah hrfhsdh fhds jfds"}
        ></InfoBox>
        <p>hi</p>
      </div>
    </div>
  );
}

export default MainPage;
