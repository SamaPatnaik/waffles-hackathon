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
    { isUser: true, message: "hryeud fake message ghfn" },
    { isUser: false, message: "hryds d shfeud" },
  ]);
  var [contacts, setContacts] = useState([false]);

  // sends user's message
  const sendMessage = (message) => {
    setMessages(messages.concat([{ isUser: true, message: message }]));
    var obj = document.getElementById("messages");
    setTimeout(() => {
      var obj = document.getElementById("messages");
      obj.scrollTop = obj.scrollHeight;
    }, 10);
    getResponse(message);
  };

  // receives chatbot's message
  const receiveMessage = (message) => {
    setMessages(messages.concat([{ isUser: false, message: message }]));
    var obj = document.getElementById("messages");
    setTimeout(() => {
      var obj = document.getElementById("messages");
      obj.scrollTop = obj.scrollHeight;
    }, 10);
    getResponse(message);
  };

  // sends post request to backend
  // guys i really got no clue what im supposed to be doing here
  const getResponse = (value) => {
    const payload = {
      user_input: value,
    };

    fetch("/talk", {
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

        // sorry this is just for testing
        console.log("Messages:");
        console.log(messages);
        console.log("Contacts:");
        console.log(people);

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
          {messages.map((item) => (
            <Message isUser={item.isUser} message={item.message}></Message>
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

        {contacts.map((item) =>
          item == false ? (
            <></>
          ) : item.hasOwnProperty("specialty") ? (
            <ContactBox
              type="professional"
              name={item.name}
              specialty={item.specialty}
              expertise={item.expertise}
              story={item.story}
            ></ContactBox>
          ) : (
            <ContactBox
              type="volunteer"
              name={item.name}
              specialty={item.overcame}
              expertise={item["support area"]}
              story={item.story}
            ></ContactBox>
          )
        )}
      </div>
    </div>
  );
}

export default MainPage;
