import { useState } from "react";

export default function ChatBox({ sendMessage }) {
  const [message, setMessage] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  }

  const isDisabled = () => {
    return !message.trim().length;
  };

  return (
    <form className="input-group" onSubmit={submitHandler}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn submit-button" disabled={isDisabled()}>
          SEND
        </button>
      </div>
    </form>
  );
}
