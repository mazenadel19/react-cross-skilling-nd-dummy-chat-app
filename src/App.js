import { useState } from "react";
import "./App.css";
import ChatWindow from "./components/ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

const initalState = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  const [messages, setMessages] = useState(initalState);

  function sendMessage(username, text) {
    setMessages((prev) => [...prev, { username, text }]);
  }

  return (
    <div className="App">
      <div className="container">
      
        {users.map((user) => (
          <ChatWindow
            user={user}
            messages={messages}
            sendMessage={sendMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
