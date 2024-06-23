import { useState } from "react";
import InputBox from "../components/InputBox.jsx";
import InfoBox from "../components/InfoBox.jsx";
import ContactBox from "../components/ContactBox.jsx";
import Message from "../components/Message.jsx";

// main page for chatting
function MainPage() {
  var [isBot, setIsBot] = useState(true);
  var [messages, setMessages] = useState([
    { isUser: true, message: "hryeud fake message ghfn" },
    { isUser: false, message: "hryds d shfeud" },
  ]);
  var [contacts, setContacts] = useState([false]);

  // sends user's message
  const sendMessage = (message) => {
    setMessages((prevMessages) =>
      prevMessages.concat([{ isUser: true, message }])
    );
    scrollToBottom();
    if (isBot) {
      getResponse(message);
    }
  };

  // receives chatbot's message
  const receiveMessage = (message) => {
    setMessages((prevMessages) =>
      prevMessages.concat([{ isUser: false, message }])
    );
    scrollToBottom();
  };

  const clearLog = () => {
    setIsBot(false);
    setMessages([]);
  };

  // scrolls to the bottom of the messages
  const scrollToBottom = () => {
    setTimeout(() => {
      const obj = document.getElementById("messages");
      if (obj) {
        obj.scrollTop = obj.scrollHeight;
      }
    }, 10);
  };

  // sends post request to backend
  const getResponse = (value) => {
    const payload = {
      user_input: value,
    };

    fetch("http://127.0.0.1:5000/talk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);

        const messages = data.messages;
        const people = data.people;

        console.log("Messages:", messages);
        console.log("Contacts:", people);

        // displays message
        receiveMessage(messages.ai[messages.ai.length - 1]);
        // updates contacts list
        setContacts(people);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="main">
      <div className="chat-box">
        Discuss any wellness issues, ask for assistance, or connect to
        professionals.
        <div id="messages" className="messages">
          {messages.map((item, index) => (
            <Message
              key={index}
              isUser={item.isUser}
              message={item.message}
            ></Message>
          ))}
        </div>
        <InputBox callback={sendMessage}></InputBox>
      </div>

      <div className="your-info overflow-auto">
        <div>
          <p className="info-header">Your Contacts</p>
          <p className="info-description">
            Click on a contact to chat with them.
          </p>
        </div>

        {contacts.map((item, index) =>
          !item ? null : item.hasOwnProperty("Specialty") ? (
            <ContactBox
              key={index}
              type="professional"
              name={item.Name}
              specialty={item.Specialty}
              expertise={item.Expertise}
              story={item.Story}
              callback={clearLog}
            ></ContactBox>
          ) : (
            <ContactBox
              key={index}
              type="volunteer"
              name={item.Name}
              specialty={item.Overcame}
              expertise={item["Support Area"]}
              story={item.Story}
              callback={clearLog}
            ></ContactBox>
          )
        )}
      </div>
    </div>
  );
}

export default MainPage;
