import { useState } from "react";
import InputBox from "./InputBox.jsx";
import InfoBox from "./InfoBox.jsx";
import ContactBox from "./ContactBox.jsx";
import Message from "./Message.jsx";

// main page for chatting
function MainPage() {
  var [code, setCode] = useState(false);
  // sorry ignore these placeholders
  var [messages, setMessages] = useState([
    { isUser: true, message: "hryeud" },
    { isUser: false, message: "hryds d shfeud" },
  ]);
  var [contacts, setContacts] = useState([{}]);

  const sendMessage = (message) => {
    setMessages(messages.concat([{ isUser: true, message: message }]));
  };

  return (
    <div className="main">
      <div className="chat-box">
        Discuss any wellness issues, ask for assistance, or connect to
        professionals.
        <div className="messages">
          {messages.map((item) => (
            <Message isUser={item.isUser} message={item.message}></Message>
          ))}
        </div>
        <InputBox callback={sendMessage}></InputBox>
      </div>

      <div className="your-info overflow-auto">
        <div>
          <p className="info-header">Your Info</p>
          <p className="info-description">Click on an info box to expand.</p>
        </div>
        <ContactBox
          type="volunteer"
          name="John Doe"
          specialty="idk"
          expertise="uhh cancer"
          story="blha hsldhsada shhdsj"
        ></ContactBox>
        <ContactBox
          type="professional"
          name="John Doe"
          specialty="idk"
          expertise="uhh cancer"
          story="blha hsldhsada shhdsj"
        ></ContactBox>
        <ContactBox
          type="volunteer"
          name="John Doe"
          specialty="idk"
          expertise="uhh cancer"
          story="blha hsldhsada shhdsj"
        ></ContactBox>
        <ContactBox
          type="volunteer"
          name="John Doe"
          specialty="idk"
          expertise="uhh cancer"
          story="blha hsldhsada shhdsj"
        ></ContactBox>
        <ContactBox
          type="volunteer"
          name="John Doe"
          specialty="idk"
          expertise="uhh cancer"
          story="blha hsldhsada shhdsj"
        ></ContactBox>
      </div>
    </div>
  );
}

export default MainPage;
