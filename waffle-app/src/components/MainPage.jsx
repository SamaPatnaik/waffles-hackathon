import { useState } from "react";

function MainPage() {
  var [code, setCode] = useState(false);

  return (
    <div className="main">
      <div className="chat-box">
        MAINNNblah blah here is some info
        {code}
      </div>
      <div className="info">
        <p>hi</p>
      </div>


      <button
        className="btn btn-primary login-btn"
        type="button"
        onClick={() => {}}
      >
        Login with Google
      </button>
    </div>
  );
}

export default MainPage;
