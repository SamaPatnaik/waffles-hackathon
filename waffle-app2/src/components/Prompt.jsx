import { useState } from "react";

// for sample prompts to get the user thinking about what to chat about
function Prompt({ prompt }) {
  return (
    <div className="prompt-box">
      <p className="prompt">{prompt}</p>
    </div>
  );
}

export default Prompt;
